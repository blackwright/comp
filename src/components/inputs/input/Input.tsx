import React from 'react';
import { Props } from './types';

export const Input: React.FC<Props> = React.forwardRef(
  ({ testId, ...rest }, ref: React.Ref<HTMLInputElement>) => {
    return <input data-testid={testId} ref={ref} {...rest} />;
  }
);

Input.defaultProps = {
  testId: 'input',
  type: 'text'
};
