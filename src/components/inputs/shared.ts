import { css } from 'styled-components';
import { theme, Theme } from 'theme';

export function typeableInputStyle(
  theme: Theme,
  isFullWidth?: boolean,
  disabled?: boolean
) {
  return css`
    padding: ${theme.sizing.fn(1)}px;
    background: ${getBackgroundColor(disabled).hex};
    color: ${getTextColor(disabled).hex};
    border-radius: ${theme.sizing.borderRadius};
    border: 1px solid ${theme.colors.gray1.hex};
    transition: all ${theme.transitions.fast};
    ${isFullWidth && 'width: 100%;'}
    word-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    outline: 0;

    ${!disabled &&
      css`
        :hover,
        :focus,
        :active {
          border-color: ${theme.colors.blue6.hex};
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
