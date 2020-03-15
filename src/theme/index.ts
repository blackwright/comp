import { sizing } from './sizing';
import { font } from './font';
import { colors } from './colors';
import { transitions } from './transitions';
import { shadows } from './shadows';
import { ColorName as _ColorName, VariantName as _VariantName } from './colors';

export { GlobalStyle } from './GlobalStyle';

export const theme = {
  sizing,
  font,
  colors,
  transitions,
  shadows
};

export type ColorName = _ColorName;
export type VariantName = _VariantName;
export type Theme = typeof theme;
