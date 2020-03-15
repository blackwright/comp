import { css } from 'styled-components';
import { theme, Theme } from 'theme';

export function typeableInputStyle(
  theme: Theme,
  isFullWidth?: boolean,
  disabled?: boolean
) {
  return css`
    font-size: ${theme.font.variants.normal.size};
    line-height: ${theme.font.variants.normal.height};
    padding: ${theme.sizing.fn(1)}px;
    background: ${getBackgroundColor(disabled).hex};
    color: ${getTextColor(disabled).hex};
    border-radius: ${theme.sizing.borderRadius};
    border: 1px solid ${theme.colors.gray1.hex};
    transition: all ${theme.transitions.fast};
    ${isFullWidth && 'width: 100%;'}
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    outline: 0;

    ${!disabled &&
      css`
        :hover {
          border-color: ${theme.colors.variants.action.background.hover.hex};
        }

        :focus,
        :active {
          border-color: ${theme.colors.variants.action.background.active.hex};
        }
      `}
  `;
}

function getBackgroundColor(isDisabled?: boolean) {
  if (isDisabled) {
    return theme.colors.variants.disabled.background.passive;
  }

  return theme.colors.white;
}

function getTextColor(isDisabled?: boolean) {
  if (isDisabled) {
    return theme.colors.variants.disabled.text;
  }

  return theme.colors.text.dark;
}
