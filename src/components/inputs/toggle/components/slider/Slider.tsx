import styled, { css } from 'styled-components';
import { Props } from './types';

export const Slider = styled.div<Props>(
  ({ checked, disabled, theme: { colors, sizing, transitions } }) => css`
    background: ${disabled
      ? colors.variants.disabled.background.passive.hex
      : checked
      ? colors.blue4.hex
      : colors.gray4.hex};
    transition: background ${transitions.slow};
    border-radius: ${sizing.fn(3)}px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `
);
