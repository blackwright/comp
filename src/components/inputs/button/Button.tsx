import React from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'theme/colors/utils';
import { Props } from './index';
import { sizeStringToPadding } from './types';
import { getBackgroundColor, getTextColor } from './utils';

export const ButtonComponent: React.FC<Props> = React.forwardRef(
  ({ testId, isFullWidth, ...rest }, ref: React.Ref<HTMLButtonElement>) => {
    return <button data-testid={testId} ref={ref} {...rest} />;
  }
);

ButtonComponent.defaultProps = {
  testId: 'button',
  type: 'submit',
  size: 'md',
  color: 'blue6'
};

export const Button = styled(ButtonComponent)<Props>(
  ({
    size = 'md',
    color = 'blue6',
    disabled,
    isFullWidth,
    theme: { sizing, colors, transitions }
  }) => {
    const passiveColor = getBackgroundColor(colors[color], disabled);
    const hoverColor = darken(passiveColor, 0.75);
    const activeColor = darken(hoverColor, 0.75);

    return css`
      padding: ${sizeStringToPadding[size].y}px ${sizeStringToPadding[size].x}px;
      background: ${passiveColor.hex};
      color: ${getTextColor(colors[color], disabled).hex};
      border-radius: ${sizing.borderRadius};
      transition: background ${transitions.fast};
      ${isFullWidth && 'width: 100%;'}
      outline: 0;
      border: 0;

      ${!disabled &&
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
