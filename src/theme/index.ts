import { sizing } from './sizing';
import { font } from './font';
import { colors } from './colors';
import { transitions } from './transitions';
import { shadows } from './shadows';

export { ColorName } from './colors';
export { GlobalStyle } from './GlobalStyle';

export const theme = {
  sizing,
  font,
  colors,
  transitions,
  shadows
};

export type Theme = typeof theme;
