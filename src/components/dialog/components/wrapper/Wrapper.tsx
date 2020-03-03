import styled from 'styled-components';
import { Props } from './types';

export const Wrapper = styled.div<Pick<Props, 'usePortal'>>`
  position: ${({ usePortal }) => (usePortal ? 'fixed' : 'absolute')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
