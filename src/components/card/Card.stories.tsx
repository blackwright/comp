import * as React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Card } from './Card';
import { shadows as themeShadows, ShadowName } from 'theme/shadows';
import { createKnobsSelectOptions } from 'utils';

export default {
  title: 'Layout/Card',
  component: Card,
  decorators: [withKnobs]
};

export const Default = () => {
  const shadowOptions = createKnobsSelectOptions(
    Object.keys(themeShadows) as ShadowName[]
  );

  const shadow = select('shadow', shadowOptions, 'md');

  return (
    <Card shadow={shadow} p="md" mBottom="sm" justifyContent="center">
      Content
    </Card>
  );
};
