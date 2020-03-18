import styled, { css } from 'styled-components';
import { Props } from './types';

export const Input = styled.input<Props>(
  ({ hasPill, theme: { font, sizing } }) => css`
    font-size: ${font.variants.normal.size};
    line-height: ${font.variants.normal.height};
    margin: 0;
    ${hasPill && `margin-left: ${sizing.fn(0.25)}px;`}
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
