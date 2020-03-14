import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Badge } from './Badge';
import { variantToColorsMapping, VariantName } from './types';
import { createKnobsSelectOptions } from 'utils';

export default {
  title: 'Layout/Badge',
  component: Badge,
  decorators: [withKnobs]
};

export const Default = () => {
  const variantOptions = createKnobsSelectOptions(
    Object.keys(variantToColorsMapping) as VariantName[]
  );

  const variant = select('variant', variantOptions, 'neutral');

  return <Badge variant={variant}>Henlo</Badge>;
};
