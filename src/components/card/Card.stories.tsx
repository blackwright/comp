import * as React from 'react';
import { Card } from './Card';
import { shadows, ShadowName } from 'theme/shadows';

export default {
  title: 'Card',
  component: Card
};

export const Shadows = (Object.keys(shadows) as ShadowName[]).map(shadow => (
  <Card
    key={shadow}
    shadow={shadow}
    p="md"
    mBottom="sm"
    justifyContent="center"
  >
    {shadow}
  </Card>
));
