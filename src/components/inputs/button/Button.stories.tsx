import React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { Button } from './index';
import { sizeStringToPadding, Size } from './types';
import { getColorVariantKeys } from 'utils';

export default {
  title: 'Input/Button',
  component: Button,
  decorators: [withKnobs]
};

export const Default = () => {
  const variant = select('variant', getColorVariantKeys(), 'action');
  const size = select('size', Object.keys(sizeStringToPadding) as Size[], 'md');
  const isFullWidth = boolean('isFullWidth', false);
  const disabled = boolean('disabled', false);
  const children = text('children', 'Button');

  return (
    <Button
      variant={variant}
      size={size}
      isFullWidth={isFullWidth}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
