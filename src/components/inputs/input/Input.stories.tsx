import React from 'react';
import { Input } from './Input';

export default {
  title: 'Inputs/Input',
  component: Input
};

export const Default = () => <Input placeholder="Input" />;

export const FullWidth = () => (
  <div style={{ width: '300px', padding: '8px', background: 'pink' }}>
    <Input placeholder="Full width" isFullWidth={true} />
  </div>
);

export const Disabled = () => <Input disabled={true} placeholder="Disabled" />;
