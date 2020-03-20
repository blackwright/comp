import styled, { css } from 'styled-components';

export const Wrapper = styled.label(
  ({ theme: { sizing } }) => css`
    width: ${sizing.fn(5.5)}px;
    height: ${sizing.fn(3)}px;
    position: relative;
    display: inline-flex;
    margin: 0;
    flex-shrink: 0;
  `
);
