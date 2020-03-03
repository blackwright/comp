import styled, { css } from 'styled-components';
import { Props } from './types';

export const InnerDialog = styled.div<Props>(
  ({ usePortal, theme: { sizing, colors } }) => css`
    border-radius: ${sizing.borderRadius};
    background-color: ${colors.white.hex};
    position: ${usePortal ? 'fixed' : 'relative'};
    margin: 0;
    outline: 0;
    background-clip: padding-box;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    max-width: 90%;
    max-height: 90%;
    overflow: hidden;
    position: absolute;
    display: flex;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  `
);
