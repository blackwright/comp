import React from 'react';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import { NumberInput } from './NumberInput';

export default {
  title: 'Input/NumberInput',
  component: NumberInput,
  decorators: [withKnobs]
};

export const Default = () => {
  const placeholder = text('placeholder', 'Number input');
  const min = number('min', 1);
  const max = number('max', 10);
  const isInteger = boolean('isInteger', true);
  const isFullWidth = boolean('isFullWidth', false);
  const disabled = boolean('disabled', false);

  return (
    <NumberInput
      placeholder={placeholder}
      min={min}
      max={max}
      isInteger={isInteger}
      isFullWidth={isFullWidth}
      disabled={disabled}
    />
  );
};
