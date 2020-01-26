import React from 'react';
import { Input } from './Input';

export default {
  title: 'Inputs/Input',
  component: Input
};

export const Default = () => <Input placeholder="Input" />;

export const Disabled = () => <Input isDisabled={true} placeholder="Input" />;
