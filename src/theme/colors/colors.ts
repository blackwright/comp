import {
  blues,
  greens,
  limes,
  monochrome,
  oranges,
  pinks,
  purples,
  reds,
  teals,
  yellows
} from './raw';

const background = {
  ...monochrome,
  action: blues.blue4,
  error: reds.red3
};

const text = {
  light: monochrome.light1,
  dark: monochrome.dark4
};

export const rgbColors = {
  byHue: {
    blues,
    greens,
    limes,
    monochrome,
    oranges,
    pinks,
    purples,
    reds,
    teals,
    yellows
  },
  ...blues,
  ...greens,
  ...limes,
  ...monochrome,
  ...oranges,
  ...pinks,
  ...purples,
  ...reds,
  ...teals,
  ...yellows,
  background,
  text
};
