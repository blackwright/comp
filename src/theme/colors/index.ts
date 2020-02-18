import { rgbColors } from './colors';
import { addCSSToColorDictionary } from './utils';

export { ColorScale, ColorCSS, ColorValues } from './types';

const { byHue, ...rest } = rgbColors;
const { background, text, ...raw } = rest;

export const colors = {
  byHue: {
    blues: addCSSToColorDictionary(byHue.blues),
    greens: addCSSToColorDictionary(byHue.greens),
    limes: addCSSToColorDictionary(byHue.limes),
    monochrome: addCSSToColorDictionary(byHue.monochrome),
    oranges: addCSSToColorDictionary(byHue.oranges),
    pinks: addCSSToColorDictionary(byHue.pinks),
    purples: addCSSToColorDictionary(byHue.purples),
    reds: addCSSToColorDictionary(byHue.reds),
    teals: addCSSToColorDictionary(byHue.teals),
    yellows: addCSSToColorDictionary(byHue.yellows)
  },
  background: addCSSToColorDictionary(background),
  text: addCSSToColorDictionary(text),
  ...addCSSToColorDictionary(raw)
};

export type ColorName = keyof typeof raw;
