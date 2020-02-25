import { sizingToShadow } from './utils';

export const shadows = {
  xs: sizingToShadow(0.75),
  sm: sizingToShadow(1),
  md: sizingToShadow(1.25),
  lg: sizingToShadow(1.5),
  xl: sizingToShadow(1.75)
};

export type ShadowName = keyof typeof shadows;
