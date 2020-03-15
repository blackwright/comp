import * as React from 'react';
import styled, { css } from 'styled-components';
import { Props } from './types';

export const DropdownItemComponent: React.FC<Props> = ({
  className,
  children,
  disabled,
  ...rest
}) => {
  return (
    <li className={className} {...rest}>
      {children}
    </li>
  );
};

export const DropdownItem = styled(DropdownItemComponent)(
  ({ onClick, disabled, theme: { colors, sizing } }) => {
    const isInteractable = !disabled && !!onClick;
    const disabledColors = colors.variants.disabled;

    return css`
      color: ${disabled ? disabledColors.text.hex : colors.text.dark.hex};
      background: ${disabled
        ? disabledColors.background.passive.hex
        : colors.white.hex};
      padding: ${sizing.fn(1)}px ${sizing.fn(2)}px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      user-select: none;
      cursor: default;

      :hover {
        ${disabled && `color: ${disabledColors.text.hex};`};
      }

      ${isInteractable &&
        `
          :hover {
            background: ${colors.blue2.hex};
            text-decoration: none;
          }
        `}
    `;
  }
);
