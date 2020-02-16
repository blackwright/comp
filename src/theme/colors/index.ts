import { rgbColors } from './colors';
import { addCSSToColorDictionary } from './utils';

export { ColorScale, ColorCSS, ColorValues, Brightness } from './types';

export const colors = {
  all: addCSSToColorDictionary(rgbColors.all),
  background: addCSSToColorDictionary(rgbColors.background),
  blues: addCSSToColorDictionary(rgbColors.blues),
  greens: addCSSToColorDictionary(rgbColors.greens),
  limes: addCSSToColorDictionary(rgbColors.limes),
  monochrome: addCSSToColorDictionary(rgbColors.monochrome),
  oranges: addCSSToColorDictionary(rgbColors.oranges),
  pinks: addCSSToColorDictionary(rgbColors.pinks),
  purples: addCSSToColorDictionary(rgbColors.purples),
  reds: addCSSToColorDictionary(rgbColors.reds),
  teals: addCSSToColorDictionary(rgbColors.teals),
  yellows: addCSSToColorDictionary(rgbColors.yellows)
};
