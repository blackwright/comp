import React from 'react';
import styled, { css } from 'styled-components';
import { Props } from './types';
import { typeableInputStyle } from '../shared';

export const InputComponent: React.FC<Props> = React.forwardRef(
  ({ testId, isFullWidth, ...rest }, ref: React.Ref<HTMLInputElement>) => {
    return <input data-testid={testId} ref={ref} {...rest} />;
  }
);

export const Input = styled(InputComponent)<Props>(
  ({ theme, isFullWidth, disabled }) => css`
    ${typeableInputStyle(theme, isFullWidth, disabled)}
  `
);

Input.defaultProps = {
  testId: 'input',
  type: 'text'
};
