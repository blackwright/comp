import React from 'react';
import { Props } from './index';

export const Button: React.FC<Props> = React.forwardRef(
  (
    { testId, disabled, isDisabled, ...rest },
    ref: React.Ref<HTMLButtonElement>
  ) => {
    const internalDisabled = disabled || isDisabled;

    return (
      <button
        data-testid={testId}
        ref={ref}
        disabled={internalDisabled}
        {...rest}
      />
    );
  }
);

Button.defaultProps = {
  type: 'submit',
  isDisabled: false
};
