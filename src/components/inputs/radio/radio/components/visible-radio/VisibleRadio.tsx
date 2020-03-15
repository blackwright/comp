import * as React from 'react';
import styled, { css } from 'styled-components';
import { FaCircle } from 'react-icons/fa';
import { Props } from './types';

const VisibleRadioComponent: React.FC<Props> = ({ checked, className }) => {
  return (
    <div className={className}>
      <Dot checked={checked} />
    </div>
  );
};

const Dot = styled(FaCircle)<Pick<Props, 'checked'>>(
  ({ checked, theme: { transitions } }) => css`
    opacity: ${checked ? 1 : 0};
    transition: opacity ${transitions.fast};
    color: inherit;
    width: 60%;
    height: 60%;
    border-radius: 50%;
  `
);

export const VisibleRadio = styled(VisibleRadioComponent)(
  ({
    isHovered,
    checked,
    disabled,
    theme: { colors, sizing, transitions }
  }) => {
    const variantColors = disabled
      ? colors.variants.disabled
      : colors.variants.action;

    return css`
      color: ${colors.white.hex};
      width: ${sizing.fn(2)}px;
      height: ${sizing.fn(2)}px;
      margin-right: ${sizing.fn()}px;
      border: 1px solid ${variantColors.background.passive.hex};
      background: ${checked || disabled
        ? variantColors.background.passive.hex
        : colors.white.hex};
      transition: all ${transitions.fast};
      border-radius: 50%;
      display: flex;
      flex: 0 0 auto;
      align-items: center;
      justify-content: center;

      ${isHovered &&
        !disabled &&
        css`
          border-color: ${variantColors.background.hover.hex};
        `}
    `;
  }
);
