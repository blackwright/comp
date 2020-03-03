import styled from 'styled-components';
import { Props } from './types';

export const Backdrop = styled.div<Props>`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  touch-action: none;
`;
