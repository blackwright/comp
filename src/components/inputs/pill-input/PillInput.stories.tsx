import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { PillInput } from './PillInput';

export default {
  title: 'Input/PillInput',
  component: PillInput,
  decorators: [withKnobs]
};

export const Default = () => {
  return <PillInput onPillChange={values => console.log(values)} />;
};
