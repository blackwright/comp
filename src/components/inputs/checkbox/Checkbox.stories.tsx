import React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { Checkbox } from './index';

export default {
  title: 'Input/Checkbox',
  component: Checkbox,
  decorators: [withKnobs]
};

export const Default = () => {
  const checked = boolean('checked', false);
  const alignItems = select(
    'alignItems',
    ['flex-start', 'center', 'flex-end'],
    'flex-start'
  );
  const disabled = boolean('disabled', false);
  const children = text('children', 'Label');

  return (
    <Checkbox checked={checked} alignItems={alignItems} disabled={disabled}>
      {children}
    </Checkbox>
  );
};
