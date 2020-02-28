import React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { Button } from './index';
import { sizeStringToPadding, Size } from './types';

export default {
  title: 'Input/Button',
  component: Button,
  decorators: [withKnobs]
};

export const Default = () => {
  const size = select('size', Object.keys(sizeStringToPadding) as Size[], 'md');
  const isFullWidth = boolean('isFullWidth', false);
  const disabled = boolean('disabled', false);
  const children = text('children', 'Button');

  return (
    <Button size={size} isFullWidth={isFullWidth} disabled={disabled}>
      {children}
    </Button>
  );
};
