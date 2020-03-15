import * as React from 'react';
import { VariableSizeList, ListChildComponentProps } from 'react-window';
import { MenuListComponentProps } from 'react-select/src/components/Menu';
import {
  isGroupedList,
  getChildHeightUsingStyles,
  sum,
  ensureIsNumber
} from './utils';

export function VirtualizedMenuList<OptionType>(
  props: MenuListComponentProps<OptionType>
) {
  const listRef = React.useRef<VariableSizeList | null>(null);

  const [children, setChildren] = React.useState<any[]>(
    React.Children.toArray(props.children)
  );

  // Set children in array form in state
  React.useEffect(() => {
    let childrenArray = React.Children.toArray(props.children) as any[];

    if (isGroupedList(childrenArray)) {
      childrenArray = childrenArray.reduce((acc, groupChild) => {
        const {
          props: { children: subOptions = [] }
        } = groupChild;

        // Pass a 'group' type prop to group label children so we
        // can distinguish them when calculating style during render
        return [
          ...acc,
          React.cloneElement(groupChild, { type: 'group' }, []),
          ...subOptions
        ];
      }, []);
    }

    setChildren(childrenArray);
  }, [props.children]);

  // Scroll to top of list whenever search filter changes
  React.useEffect(() => {
    listRef.current?.scrollToItem(0);
  }, [props.selectProps.inputValue]);

  // Clear list cache when children change
  React.useEffect(() => {
    if (children.length === 1) {
      listRef.current?.resetAfterIndex(0, true);
    }
  }, [children]);

  // We assume that styles will not change over the lifespan of the component
  const getChildHeight = React.useMemo(
    () =>
      getChildHeightUsingStyles({
        groupStyles: props.getStyles('group', props),
        groupHeadingStyles: props.getStyles('groupHeading', props),
        loadingMsgStyles: props.getStyles('loadingMessage', props),
        noOptionsMsgStyles: props.getStyles('noOptionsMessage', props),
        optionStyles: props.getStyles('option', props)
      }),
    [props]
  );

  const childHeights = children.map(getChildHeight);

  const {
    maxHeight: menuListMaxHeight = 400,
    paddingBottom: menuListPaddingBottom = 0,
    paddingTop: menuListPaddingTop = 0,
    ...restOfMenuListStyle
  }: React.CSSProperties = props.getStyles('menuList', props);

  const totalChildrenHeight = sum(childHeights);
  const totalMenuHeight =
    ensureIsNumber(totalChildrenHeight) +
    ensureIsNumber(menuListPaddingBottom) +
    ensureIsNumber(menuListPaddingTop);
  const menuHeight = Math.min(
    ensureIsNumber(menuListMaxHeight),
    totalMenuHeight
  );
  const estimatedListItemHeight = Math.floor(
    totalChildrenHeight / children.length
  );

  const { classNamePrefix, isMulti } = props.selectProps;

  return (
    <VariableSizeList
      ref={listRef}
      outerRef={props.innerRef}
      className={
        classNamePrefix
          ? `${classNamePrefix}__menu-list${
              isMulti ? `${classNamePrefix}__menu-list--is-multi` : ''
            }`
          : ''
      }
      style={restOfMenuListStyle}
      estimatedItemSize={estimatedListItemHeight}
      innerElementType={React.forwardRef(
        ({ style, ...rest }, ref: React.Ref<HTMLDivElement>) => (
          <div
            ref={ref}
            style={{
              ...style,
              height:
                parseFloat(style.height) +
                ensureIsNumber(menuListPaddingBottom) +
                ensureIsNumber(menuListPaddingTop)
            }}
            {...rest}
          />
        )
      )}
      width="100%"
      height={menuHeight}
      itemCount={children.length}
      itemData={children}
      itemSize={index => childHeights[index]}
    >
      {({ data, index, style }: ListChildComponentProps) => (
        <div
          style={{
            ...style,
            top: `${parseFloat(`${style.top}`) +
              ensureIsNumber(menuListPaddingTop)}px`
          }}
        >
          {data[index]}
        </div>
      )}
    </VariableSizeList>
  );
}
