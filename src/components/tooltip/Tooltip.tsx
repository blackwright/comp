import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Manager, Reference, Popper } from 'react-popper';
import { Arrow, Content } from './components';
import { Props } from './types';
import { PlacementContainer } from './utils';
import { defaultAnimation } from './animation';

export const Tooltip: React.FC<Props> = ({
  components = {},
  testId,
  isOpen,
  trigger,
  placement,
  animation,
  children
}) => {
  const [openState, setOpenState] = React.useState(isOpen ?? false);

  React.useEffect(() => {
    if (isOpen == null) {
      setOpenState(false);
    } else {
      setOpenState(isOpen);
    }
  }, [isOpen]);

  const tooltipEventHandlers = React.useMemo(
    () => ({
      onTouchStart: (event: TouchEvent) => {
        trigger.props.onTouchStart?.(event);
        setOpenState(true);
      },
      onTouchEnd: (event: TouchEvent) => {
        trigger.props.onTouchEnd?.(event);
        setOpenState(false);
      },
      onMouseOver: (event: MouseEvent) => {
        trigger.props.onMouseOver?.(event);
        setOpenState(true);
      },
      onMouseLeave: (event: MouseEvent) => {
        trigger.props.onMouseLeave?.(event);
        setOpenState(false);
      },
      onFocus: (event: FocusEvent) => {
        trigger.props.onFocus?.(event);
        setOpenState(true);
      },
      onBlur: (event: FocusEvent) => {
        trigger.props.onBlur?.(event);
        setOpenState(false);
      }
    }),
    [trigger]
  );

  const handlersToBind = isOpen == null ? tooltipEventHandlers : {};

  const Components = {
    Content: components.Content ?? Content
  };

  return (
    <Manager>
      <Reference>
        {({ ref }) => React.cloneElement(trigger, { ref, ...handlersToBind })}
      </Reference>

      <AnimatePresence>
        {openState && (
          <Popper placement={placement}>
            {({ ref, style, arrowProps, placement: popperPlacement }) => (
              <PlacementContainer
                ref={ref}
                style={style}
                data-placement={popperPlacement}
                {...animation}
              >
                <Components.Content data-testid={testId}>
                  {children}
                </Components.Content>
                <Arrow ref={arrowProps.ref} style={arrowProps.style} />
              </PlacementContainer>
            )}
          </Popper>
        )}
      </AnimatePresence>
    </Manager>
  );
};

Tooltip.defaultProps = {
  testId: 'tooltip',
  placement: 'auto',
  components: {},
  animation: defaultAnimation
};
