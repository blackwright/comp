import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  ({ theme: { sizing } }) => css`
    margin: ${sizing.fn(0.25)}px;
    display: inline-flex;
    align-items: stretch;
  `
);
