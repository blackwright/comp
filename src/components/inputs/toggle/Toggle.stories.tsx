import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Toggle } from './Toggle';

export default {
  title: 'Input/Toggle',
  component: Toggle,
  decorators: [withKnobs]
};

export const Default = () => {
  return <Toggle />;
};
