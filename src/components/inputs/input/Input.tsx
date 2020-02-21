import React from 'react';
import styled, { css } from 'styled-components';
import { Props } from './types';
import { typeableInputStyle } from '../shared';

export const InputComponent: React.FC<Props> = React.forwardRef(
  ({ testId, isFullWidth, ...rest }, ref: React.Ref<HTMLInputElement>) => {
    return <input data-testid={testId} ref={ref} {...rest} />;
  }
);

InputComponent.defaultProps = {
  testId: 'input',
  type: 'text'
};

export const Input = styled(InputComponent)(
  ({ theme, isFullWidth, disabled }) => css`
    ${typeableInputStyle(theme, isFullWidth, disabled)}
  `
);
