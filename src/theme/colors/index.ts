import { rgbColors } from './colors';
import { addCSSToColor, addCSSToColorDictionary } from './utils';

const { byHue, ...rest } = rgbColors;
const { variants, text, ...raw } = rest;

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
  variants: {
    disabled: {
      text: addCSSToColor(variants.disabled.text),
      background: addCSSToColorDictionary(variants.disabled.background)
    },
    action: {
      text: addCSSToColor(variants.action.text),
      background: addCSSToColorDictionary(variants.action.background)
    },
    positive: {
      text: addCSSToColor(variants.positive.text),
      background: addCSSToColorDictionary(variants.positive.background)
    },
    negative: {
      text: addCSSToColor(variants.negative.text),
      background: addCSSToColorDictionary(variants.negative.background)
    },
    neutral: {
      text: addCSSToColor(variants.neutral.text),
      background: addCSSToColorDictionary(variants.neutral.background)
    },
    error: {
      text: addCSSToColor(variants.error.text),
      background: addCSSToColorDictionary(variants.error.background)
    },
    warning: {
      text: addCSSToColor(variants.warning.text),
      background: addCSSToColorDictionary(variants.warning.background)
    }
  },
  text: addCSSToColorDictionary(text),
  ...addCSSToColorDictionary(raw)
};

export type ColorName = keyof typeof raw;

export { RGB, ColorScale, ColorCSS, ColorValues, VariantName } from './types';
