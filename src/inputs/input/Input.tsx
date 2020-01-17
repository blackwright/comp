import React from 'react';
import { Props } from './types';

export const Input: React.FC<Props> = React.forwardRef(
  (
    { testId, disabled, isDisabled, ...rest },
    ref: React.Ref<HTMLInputElement>
  ) => {
    const internalDisabled = disabled || isDisabled;

    return (
      <input
        data-testid={testId}
        ref={ref}
        disabled={internalDisabled}
        {...rest}
      />
    );
  }
);

Input.defaultProps = {
  testId: 'input',
  type: 'text',
  isDisabled: false
};
