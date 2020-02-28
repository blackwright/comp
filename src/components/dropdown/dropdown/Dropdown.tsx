import * as React from 'react';
import { Manager, Reference, Popper } from 'react-popper';
import { AnimatePresence, motion } from 'framer-motion';
import { Card, List } from './components';
import { defaultAnimation } from './animation';
import { Props } from './types';

export const Dropdown: React.FC<Props> = ({
  components = {},
  animation = defaultAnimation,
  testId,
  isOpen,
  placement,
  trigger,
  matchTriggerWidth,
  onClick,
  disabled,
  children
}) => {
  const [isOpenState, setIsOpenState] = React.useState(!!isOpen);
  // Set a min-width on the dropdown list that matches the width of the trigger element
  const [minListWidth, setMinListWidth] = React.useState<number | null>(null);

  const triggerRef = React.useRef<any>(null);
  const optionsListRef = React.useRef<HTMLUListElement | null>(null);

  React.useEffect(() => setIsOpenState(!!isOpen), [isOpen]);

  const handleDocumentClick = React.useCallback(
    (clickEvent: MouseEvent) => {
      const clickTarget = clickEvent.target;

      if (
        clickTarget instanceof Node &&
        !(
          triggerRef.current?.contains(clickTarget) ||
          optionsListRef.current?.contains(clickTarget)
        )
      ) {
        onClick?.(false);

        if (isOpen == null) {
          setIsOpenState(false);
        }
      }
    },
    [isOpen, onClick]
  );

  React.useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [handleDocumentClick]);

  const handleScroll = React.useCallback(() => {
    onClick?.(false);
    setIsOpenState(false);
  }, [onClick]);

  React.useEffect(() => {
    // add scroll listener to close Dropdown when opening
    if (!isOpenState) {
      return;
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpenState, handleScroll]);

  const handleTriggerClick = () => {
    if (disabled) {
      return;
    }
    onClick?.(!isOpenState);

    if (isOpen == null) {
      setIsOpenState(!isOpenState);
    }
  };

  const handleCloneTrigger = ({ ref }: { ref: React.Ref<HTMLElement> }) => {
    return React.cloneElement(trigger, {
      ref: (node: HTMLElement) => {
        triggerRef.current = node;

        if (node) {
          const minWidth = matchTriggerWidth ? node.clientWidth : null;
          setMinListWidth(minWidth);
        }

        const { ref: originalRef } = trigger as any;
        if (typeof originalRef === 'function') {
          originalRef(node);
        }

        if (typeof ref === 'function') {
          ref(node);
        }
      },
      onClick: (clickEvent: React.MouseEvent) => {
        trigger.props.onClick?.(clickEvent);
        handleTriggerClick();
      }
    });
  };

  const Components = React.useMemo(
    () => ({
      Card: components?.Card
        ? motion.custom(components.Card)
        : motion.custom(Card),
      List: components?.List ?? List
    }),
    [components]
  );

  return (
    <Manager>
      <Reference>{handleCloneTrigger}</Reference>

      <AnimatePresence>
        {isOpenState && (
          <Popper placement={placement}>
            {({ ref, style }) => (
              <Components.Card
                ref={ref}
                shadow="sm"
                {...animation}
                style={style}
              >
                <Components.List
                  ref={optionsListRef}
                  data-testid={testId}
                  minWidth={minListWidth}
                >
                  {children}
                </Components.List>
              </Components.Card>
            )}
          </Popper>
        )}
      </AnimatePresence>
    </Manager>
  );
};

Dropdown.defaultProps = {
  testId: 'dropdown',
  placement: 'bottom-start',
  matchTriggerWidth: true,
  animation: defaultAnimation
};
