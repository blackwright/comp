import styled from 'styled-components';
import { Props } from './types';

export const List = styled.ul<Props>`
  ${({ minWidth }) => minWidth != null && `min-width: ${minWidth}px;`}
  margin: 0;
  padding: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: flex-start;
  list-style: none;
`;
