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
  ({ alignItems, theme: { sizing } }) => css`
    align-items: ${alignItems};
    line-height: ${sizing.fn(2)}px;
    display: flex;
    flex-flow: row nowrap;
  `
);
