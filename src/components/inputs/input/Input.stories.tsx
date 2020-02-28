import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Input } from './Input';

export default {
  title: 'Input/Input',
  component: Input,
  decorators: [withKnobs]
};

export const Default = () => {
  const placeholder = text('placeholder', 'Input');
  const isFullWidth = boolean('isFullWidth', false);
  const disabled = boolean('disabled', false);

  return (
    <Input
      placeholder={placeholder}
      disabled={disabled}
      isFullWidth={isFullWidth}
    />
  );
};
