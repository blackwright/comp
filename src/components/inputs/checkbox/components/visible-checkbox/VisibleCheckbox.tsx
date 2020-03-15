import React from 'react';
import styled, { css } from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import { Props } from './types';

const VisibleCheckboxComponent: React.FC<Props> = ({ className }) => (
  <div className={className}>
    <CheckIcon />
  </div>
);

const CheckIcon = styled(FaCheck)(
  ({ theme: { sizing } }) => css`
    width: ${sizing.fn(1.5)}px;
    height: ${sizing.fn(1.5)}px;
  `
);

export const VisibleCheckbox = styled(VisibleCheckboxComponent)(
  ({
    checked,
    disabled,
    isHovered,
    theme: { sizing, colors, transitions }
  }) => {
    const variantColors = disabled
      ? colors.variants.disabled
      : colors.variants.action;

    return css`
      color: ${colors.white.hex};
      border-radius: ${sizing.borderRadius};
      width: ${sizing.fn(2)}px;
      height: ${sizing.fn(2)}px;
      border: 1px solid ${variantColors.background.passive.hex};
      transition: all ${transitions.slow};
      background: ${checked || disabled
        ? variantColors.background.passive.hex
        : colors.white.hex};
      display: flex;
      flex: 0 0 auto;
      align-items: center;
      justify-content: center;

      & > ${CheckIcon} {
        opacity: ${checked ? 1 : 0};
        transition: opacity ${transitions.fast};
      }

      ${isHovered &&
        !disabled &&
        `
        border-color: ${variantColors.background.hover.hex};
      `}
    `;
  }
);
