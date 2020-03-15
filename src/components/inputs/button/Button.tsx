import React from 'react';
import styled, { css } from 'styled-components';
import { Props } from './index';
import { sizeStringToPadding } from './types';
import { getVariantColors } from './utils';

export const ButtonComponent: React.FC<Props> = React.forwardRef(
  ({ testId, isFullWidth, ...rest }, ref: React.Ref<HTMLButtonElement>) => {
    return <button data-testid={testId} ref={ref} {...rest} />;
  }
);

ButtonComponent.defaultProps = {
  testId: 'button',
  type: 'submit',
  variant: 'action',
  size: 'md'
};

export const Button = styled(ButtonComponent)<Props>(
  ({
    variant = 'action',
    size = 'md',
    disabled,
    isFullWidth,
    theme: { sizing, transitions }
  }) => {
    const variantColors = getVariantColors(variant, disabled);

    return css`
      padding: ${sizeStringToPadding[size].y}px ${sizeStringToPadding[size].x}px;
      background: ${variantColors.background.passive.hex};
      color: ${variantColors.text.hex};
      border-radius: ${sizing.borderRadius};
      transition: all ${transitions.fast};
      ${isFullWidth && 'width: 100%;'}
      outline: 0;
      border: 0;

      ${!disabled &&
        css`
          :hover {
            background: ${variantColors.background.hover.hex};
          }

          :active {
            background: ${variantColors.background.active.hex};
          }
        `}
    `;
  }
);
