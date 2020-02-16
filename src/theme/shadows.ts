import { rgbToCSS } from './colors/utils';
import { monochrome } from './colors/raw';

export const shadows = {
  shallow: `0 2px 8px -2px ${rgbToCSS(monochrome.black, 0.16)}`,
  middle: `0 2px 12px -2px ${rgbToCSS(monochrome.black, 0.32)}`,
  deep: `0 2px 16px -2px ${rgbToCSS(monochrome.black, 0.64)}`
};
