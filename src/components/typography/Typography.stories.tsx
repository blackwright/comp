import React from 'react';
import { Typography, Variant } from './index';
import { theme } from 'theme';

export default {
  title: 'Design System/Typography',
  component: Typography
};

export const Variants = () =>
  (Object.keys(theme.font.variants) as Variant[]).map(variant => (
    <Typography as="div" key={variant} variant={variant}>
      {variant}
    </Typography>
  ));
