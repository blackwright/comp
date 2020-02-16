import React from 'react';
import styled, { css } from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import { Props } from './types';

const VisibleCheckboxComponent: React.FC<Props> = ({ className }) => (
  <div className={className}>
    <CheckIcon />
  </div>
);

// Wrap in styled factory to allow component selector CSS rule
const CheckIcon = styled(FaCheck)``;

export const VisibleCheckbox = styled(VisibleCheckboxComponent)(
  ({
    checked,
    disabled,
    isHovered,
    theme: { spacing, colors, transitions }
  }) => css`
    color: ${colors.all.white.css.hex};
    border-radius: ${spacing(0.5)}px;
    width: ${spacing(3)}px;
    height: ${spacing(3)}px;
    margin-right: ${spacing()}px;
    border: 1px solid ${colors.all.blue3.css.hex};
    transition: all ${transitions.slow};
    background: ${checked
      ? colors.background.action.css.hex
      : colors.all.white.css.hex};
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
      css`
        border-color: ${colors.background.action.css.hex};
      `}
  `
);
