import { Variants } from './types';

const family = 'Roboto, Arial, sans-serif';
const weight = 400;
const spacing = 'normal';
const transform = 'none';

const defaults = {
  size: '1rem',
  height: '1.25rem',
  family,
  weight,
  spacing,
  transform
};

export const variants: Variants = {
  header1: {
    ...defaults,
    size: '2rem',
    height: '2.5rem',
    weight: weight * 1.5
  },

  header2: {
    ...defaults,
    size: '1.75rem',
    height: '2rem'
  },

  header3: {
    ...defaults,
    size: '1.5rem',
    height: '1.5rem'
  },

  header4: {
    ...defaults,
    size: '1.25rem',
    height: '1.25rem'
  },

  header5: {
    ...defaults,
    size: '1.1rem',
    height: '1.25rem'
  },

  subtitle1: {
    ...defaults,
    height: '1.5rem'
  },

  subtitle2: {
    ...defaults,
    size: '0.75rem',
    height: '1.25rem',
    weight: weight * 1.5,
    spacing: 0.03 + 'em',
    transform: 'uppercase'
  },

  paragraph: {
    ...defaults,
    height: '1.25rem'
  },

  small: {
    ...defaults,
    size: '0.75rem'
  },

  smallCaps: {
    ...defaults,
    size: '0.75rem',
    transform: 'uppercase'
  },

  feather: {
    ...defaults,
    size: '0.75rem',
    weight: weight * 0.5
  },

  normal: {
    ...defaults
  }
};
