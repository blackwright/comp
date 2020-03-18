import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Badge } from 'components/badge';
import { Props } from './types';

const CrossComponent: React.FC<Props> = React.forwardRef(
  ({ className, variant, onClick }, ref: React.Ref<HTMLDivElement>) => (
    <Badge ref={ref} className={className} variant={variant} onClick={onClick}>
      <FaTimes />
    </Badge>
  )
);

export const Cross = styled(CrossComponent)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding-left: 0;
`;
