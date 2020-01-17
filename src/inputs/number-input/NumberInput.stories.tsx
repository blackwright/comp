import React from 'react';
import { NumberInput } from './NumberInput';

export default {
  title: 'Inputs|NumberInput',
  component: NumberInput
};

export const Default = () => <NumberInput placeholder="Number input" />;

export const MinAndMax = () => (
  <NumberInput placeholder="Within min/max" min={1} max={10} />
);
MinAndMax.story = {
  name: 'Min and max'
};

export const IsInteger = () => (
  <NumberInput placeholder="Integer only" isInteger={true} />
);
IsInteger.story = {
  name: 'Integer only'
};

export const Disabled = () => (
  <NumberInput isDisabled={true} placeholder="Number input" />
);
