import React from 'react';
import styled, { css } from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import { Props } from './types';

const VisibleCheckboxComponent: React.FC<Props> = ({ className }) => (
  <div className={className}>
    <CheckIcon />
  </div>
);

const CheckIcon = styled(FaCheck)``;

export const VisibleCheckbox = styled(VisibleCheckboxComponent)(
  ({ checked, disabled, isHovered }) => css`
    color: white;
    background: lightgray;
    border-radius: 4px;
    width: 24px;
    height: 24px;
    margin-right: 8px;
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    border: 1px solid lightgray;
    transition: all 250ms ease-in-out;

    & > ${CheckIcon} {
      opacity: ${checked ? 1 : 0};
      transition: opacity 150ms linear;
    }

    ${isHovered &&
      !disabled &&
      css`
        border-color: gray;
      `}
  `
);
