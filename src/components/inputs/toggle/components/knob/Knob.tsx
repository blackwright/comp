import styled, { css } from 'styled-components';
import { Props } from './types';

export const Knob = styled.div<Props>(
  ({ checked, theme: { colors, sizing, transitions } }) => {
    return css`
      background: ${colors.white.hex};
      left: ${checked ? `calc(100% - ${sizing.fn(2.5)}px)` : 0};
      margin: ${sizing.fn(0.5)}px;
      transition: left ${transitions.slow};
      height: ${sizing.fn(1.5)}px;
      width: ${sizing.fn(1.5)}px;
      border-radius: 50%;
      position: absolute;
    `;
  }
);
