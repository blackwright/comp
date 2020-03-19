import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Badge } from './Badge';
import { getColorVariantKeys } from 'utils';

export default {
  title: 'Layout/Badge',
  component: Badge,
  decorators: [withKnobs]
};

export const Default = () => {
  const variant = select('variant', getColorVariantKeys(), 'neutral');

  return <Badge variant={variant}>Henlo</Badge>;
};
