import { sizing } from './sizing';
import { font } from './font';
import { colors } from './colors';
import { transitions } from './transitions';
import { shadows } from './shadows';

export { GlobalStyle } from './GlobalStyle';

export const theme = {
  sizing,
  font,
  colors,
  transitions,
  shadows
};

export type { ColorName, VariantName } from './colors';

export type Theme = typeof theme;
