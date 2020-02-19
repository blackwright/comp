import React from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'theme/colors/utils';
import { Props } from './index';
import { sizeStringToPadding } from './types';
import { getBackgroundColor, getTextColor } from './utils';

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
  ({
    size = 'md',
    color = 'blue6',
    isDisabled,
    theme: { sizing, colors, transitions }
  }) => {
    const passiveColor = getBackgroundColor(colors[color], isDisabled);
    const hoverColor = darken(passiveColor, 0.75);
    const activeColor = darken(hoverColor, 0.75);

    return css`
      padding: ${sizeStringToPadding[size].y}px ${sizeStringToPadding[size].x}px;
      background: ${passiveColor.hex};
      color: ${getTextColor(colors[color], isDisabled).hex};
      border-radius: ${sizing.borderRadius};
      transition: background ${transitions.fast};
      outline: 0;
      border: 0;

      ${!isDisabled &&
        css`
          :hover {
            background: ${hoverColor.hex};
          }

          :active {
            background: ${activeColor.hex};
          }
        `}
    `;
  }
);
