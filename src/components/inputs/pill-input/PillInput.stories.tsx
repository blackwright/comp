import React from 'react';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { PillInput } from './PillInput';
import { getColorVariantKeys } from 'utils';

export default {
  title: 'Input/PillInput',
  component: PillInput,
  decorators: [withKnobs]
};

export const Default = () => {
  const variant = select('variant', getColorVariantKeys(), 'neutral');
  const placeholder = text('placeholder', 'Input');
  const isFullWidth = boolean('isFullWidth', false);
  const disabled = boolean('disabled', false);

  return (
    <PillInput
      onPillChange={values => console.log(values)}
      variant={variant}
      placeholder={placeholder}
      isFullWidth={isFullWidth}
      disabled={disabled}
    />
  );
};
