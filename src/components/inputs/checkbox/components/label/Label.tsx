import React from 'react';
import styled, { css } from 'styled-components';
import { Props } from './types';

const LabelComponent: React.FC<Props> = ({
  className,
  alignItems,
  children,
  ...rest
}) => (
  <label className={className} {...rest}>
    {children}
  </label>
);

export const Label = styled(LabelComponent)(
  ({ alignItems }) => css`
    align-items: ${alignItems};
    display: flex;
    flex-flow: row nowrap;
    line-height: 24px;
  `
);
