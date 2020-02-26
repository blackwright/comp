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
    size: '3rem',
    height: '3.5rem',
    weight: weight * 1.5
  },

  header2: {
    ...defaults,
    size: '2.75rem',
    height: '3rem'
  },

  header3: {
    ...defaults,
    size: '2rem',
    height: '2.25rem'
  },

  header4: {
    ...defaults,
    size: '1.75rem',
    height: '2rem'
  },

  header5: {
    ...defaults,
    size: '1.5rem',
    height: '1.75rem'
  },

  paragraph: {
    ...defaults,
    height: '1.5rem'
  },

  normal: {
    ...defaults
  },

  subtitle: {
    ...defaults,
    size: '0.8rem',
    height: '1.5rem'
  },

  heavyCaps: {
    ...defaults,
    size: '0.75rem',
    height: '1.25rem',
    weight: weight * 1.5,
    spacing: 0.08 + 'em',
    transform: 'uppercase'
  },

  smallCaps: {
    ...defaults,
    size: '0.75rem',
    spacing: 0.06 + 'em',
    transform: 'uppercase'
  },

  small: {
    ...defaults,
    size: '0.75rem'
  },

  feather: {
    ...defaults,
    size: '0.75rem',
    weight: weight * 0.5
  }
};
