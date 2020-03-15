import React from 'react';
import ReactSelect, { createFilter } from 'react-select';
import { ThemeProps, DefaultTheme, withTheme } from 'styled-components';
import { VirtualizedMenuList } from './components';
import stylesFn from './stylesFn';
import { Props } from './types';
import { isVirtualized } from './utils';

const VIRTUALIZED_THRESHOLD = 100;

function SelectComponent<Option>({
  theme,
  components,
  options,
  filterOption,
  menuIsOpen,
  disabled,
  isDisabled,
  ...rest
}: Props<Option> & ThemeProps<DefaultTheme>) {
  const customStyles = React.useMemo(() => stylesFn(theme), [theme]);

  const internalDisabled = !!(disabled || isDisabled);

  const useVirtualizedMenuList = isVirtualized(VIRTUALIZED_THRESHOLD, options);

  const customComponents: typeof components = {};

  if (useVirtualizedMenuList) {
    customComponents.MenuList = VirtualizedMenuList;
  }

  return (
    <ReactSelect
      styles={customStyles}
      components={{
        ...customComponents,
        ...components
      }}
      options={options}
      filterOption={filterOption ?? createFilter({ ignoreAccents: false })}
      isDisabled={internalDisabled}
      menuIsOpen={menuIsOpen ?? undefined}
      {...rest}
    />
  );
}

export const Select = withTheme(SelectComponent);
