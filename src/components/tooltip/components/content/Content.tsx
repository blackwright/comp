import styled, { css } from 'styled-components';

export const Content = styled.div(
  ({ theme: { sizing, colors, font } }) => css`
    color: ${colors.white.hex};
    background: ${colors.background.dark1.hex};
    font-size: ${font.variants.small.size};
    padding: ${sizing.fn(1)}px ${sizing.fn(2)}px;
    border-radius: ${sizing.borderRadius};
    user-select: none;
  `
);
