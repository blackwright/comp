import styled, { css } from 'styled-components';
import { Props } from './types';

export const Input = styled.input<Props>(
  ({ hasPill, disabled, theme: { font, sizing, colors } }) => css`
    font-size: ${font.variants.normal.size};
    line-height: ${font.variants.normal.height};
    background: ${disabled
      ? colors.variants.disabled.background.passive.hex
      : colors.white.hex};
    ${hasPill && `margin-left: ${sizing.fn(0.25)}px;`}
    margin: 0;
    width: 70px;
    border: 0;
    border-radius: 0;
    flex: 1 1 auto;
    outline: 0;
    padding: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    outline: 0;
  `
);
