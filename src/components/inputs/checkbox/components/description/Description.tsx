import styled from 'styled-components';

export const Description = styled.div`
  margin-left: ${({ theme: { sizing } }) => sizing.fn()}px;
  display: flex;
  align-items: flex-start;
  flex-flow: column nowrap;
`;
