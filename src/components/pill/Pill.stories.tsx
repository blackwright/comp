import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import { Pill } from './Pill';

export default {
  title: 'Layout/Pill',
  component: Pill,
  decorators: [withKnobs]
};

export const Default = () => {
  const label = text('label', 'Label');
  const value = object('value', { value: 'can be anything' });
  const onClick = (value: any) => console.log('onClick:', value);

  return <Pill label={label} value={value} onClick={onClick} />;
};
