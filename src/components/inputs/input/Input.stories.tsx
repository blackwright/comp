import React from 'react';
import { Input } from './Input';

export default {
  title: 'Inputs/Input',
  component: Input
};

export const Default = () => <Input placeholder="Input" />;

export const Disabled = () => <Input disabled={true} placeholder="Input" />;

export const FullWidth = () => (
  <div
    style={{
      width: '500px',
      padding: '10px',
      backgroundColor: 'teal'
    }}
  >
    <Input placeholder="Full width of parent" isFullWidth={true} />
  </div>
);
