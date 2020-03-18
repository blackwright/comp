import styled from 'styled-components';
import { Badge } from 'components/badge';
import { Props } from './types';

export const Label = styled(Badge)<Props>`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;
