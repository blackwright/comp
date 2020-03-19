import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { PillInput } from './PillInput';

export default {
  title: 'Input/PillInput',
  component: PillInput,
  decorators: [withKnobs]
};

export const Default = () => {
  const placeholder = text('placeholder', 'Input');
  const isFullWidth = boolean('isFullWidth', false);
  const disabled = boolean('disabled', false);

  return (
    <PillInput
      onPillChange={values => console.log(values)}
      placeholder={placeholder}
      isFullWidth={isFullWidth}
      disabled={disabled}
    />
  );
};
