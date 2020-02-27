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

    return css`
      color: ${disabled ? colors.text.disabled.hex : colors.text.dark.hex};
      background: ${disabled
        ? colors.background.disabled.hex
        : colors.white.hex};
      padding: ${sizing.fn(1)}px ${sizing.fn(2)}px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      user-select: none;
      cursor: default;

      :hover {
        ${disabled && `color: ${colors.text.disabled.hex};`};
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
