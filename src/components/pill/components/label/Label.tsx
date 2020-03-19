import styled from 'styled-components';
import { Badge } from 'components/badge';
import { Props } from './types';

export const Label = styled(Badge)<Props>`
  display: inline-block;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
