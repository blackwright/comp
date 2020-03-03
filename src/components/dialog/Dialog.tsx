import React from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import { Props } from './types';
import { getComponents, getAnimations } from './utils';
import { mergeRefs } from 'utils';

export const Dialog: React.FC<Props> = React.forwardRef(
  (props, ref: React.Ref<HTMLDivElement>) => {
    const dialogRef = React.useRef<HTMLDivElement>();

    const createDialog = ({
      components = {},
      animations = {},
      testId,
      isOpen,
      usePortal,
      useBackdrop,
      onClose,
      children,
      ...restOfProps
    }: typeof props) => {
      const Components = getComponents(components);
      const internalAnimations = getAnimations(animations);

      return (
        <AnimatePresence>
          {isOpen && (
            <Components.Wrapper usePortal={usePortal}>
              {useBackdrop && (
                <Components.Backdrop
                  key="backdrop"
                  onClick={onClose}
                  {...internalAnimations.backdrop}
                />
              )}
              <Components.InnerDialog
                key="dialog"
                data-testid={testId}
                ref={mergeRefs([ref, dialogRef])}
                usePortal={usePortal}
                {...internalAnimations.dialog}
                {...restOfProps}
              >
                {children}
              </Components.InnerDialog>
            </Components.Wrapper>
          )}
        </AnimatePresence>
      );
    };

    const dialog = createDialog(props);

    return props.usePortal
      ? ReactDOM.createPortal(dialog, document.body)
      : dialog;
  }
);

Dialog.defaultProps = {
  testId: 'dialog',
  usePortal: true,
  useBackdrop: true
};
