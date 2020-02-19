import React from 'react';
import styled, { css } from 'styled-components';
import { Props } from './types';

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
  ({ isFullWidth, theme: { colors, sizing, transitions } }) => css`
    padding: ${sizing.fn(1)}px;
    border-radius: ${sizing.borderRadius};
    border: 1px solid ${colors.gray1.hex};
    transition: all ${transitions.fast};
    ${isFullWidth && 'width: 100%;'}
    outline: 0;

    :hover,
    :focus,
    :active {
      border-color: ${colors.blue6.hex};
    }
  `
);
