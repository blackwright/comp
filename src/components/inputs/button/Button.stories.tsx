import React from 'react';
import styled from 'styled-components';
import { Button } from './index';
import { sizeStringToPadding, Size } from './types';

export default {
  title: 'Input/Button',
  component: Button
};

export const Default = () => <Button>Button</Button>;

export const Sizing = () => (
  <>
    {(Object.keys(sizeStringToPadding) as Size[]).map(size => (
      <Block key={size}>
        <Button size={size}>{size}</Button>
      </Block>
    ))}
  </>
);

const Block = styled.div`
  margin-bottom: ${({ theme }) => theme.sizing.fn()}px;
`;

export const FullWidth = () => (
  <div style={{ width: '300px', padding: '8px', background: 'pink' }}>
    <Button isFullWidth={true}>Full width</Button>
  </div>
);

export const Disabled = () => <Button disabled={true}>Button</Button>;
