import { spacing } from './spacing';
import { font } from './font';
import { colors } from './colors';
import { transitions } from './transitions';
import { shadows } from './shadows';

const theme = {
  spacing,
  font,
  colors,
  transitions,
  shadows
};

export type Theme = typeof theme;

export default theme;
