import React from 'react';
import styled, { css } from 'styled-components';
import { isBright } from 'theme/colors/utils';
import { Props } from './index';
import { sizeStringToPadding } from './types';

export const ButtonComponent: React.FC<Props> = React.forwardRef(
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

ButtonComponent.defaultProps = {
  type: 'submit',
  size: 'md',
  color: 'blue6',
  isDisabled: false
};

export const Button = styled(ButtonComponent)<Props>(
  ({ size = 'md', color = 'blue6', theme: { colors } }) => css`
    padding: ${sizeStringToPadding[size].y}px ${sizeStringToPadding[size].x}px;
    background: ${colors[color].hex};
    color: ${isBright(colors[color].value)
      ? colors.text.light.hex
      : colors.text.dark.hex};
  `
);
