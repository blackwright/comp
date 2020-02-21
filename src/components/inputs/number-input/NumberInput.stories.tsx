import React from 'react';
import { NumberInput } from './NumberInput';

export default {
  title: 'Inputs/NumberInput',
  component: NumberInput
};

export const Default = () => <NumberInput placeholder="Number input" />;

export const MinAndMax = () => (
  <NumberInput placeholder="Within min/max" min={1} max={10} />
);

export const IsInteger = () => (
  <NumberInput placeholder="Integer only" isInteger={true} />
);

export const FullWidth = () => (
  <div style={{ width: '300px', padding: '8px', background: 'pink' }}>
    <NumberInput placeholder="Full width" isFullWidth={true} />
  </div>
);

export const Disabled = () => (
  <NumberInput disabled={true} placeholder="Disabled" />
);
