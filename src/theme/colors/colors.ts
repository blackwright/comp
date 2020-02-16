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

export const rgbColors = {
  all: {
    ...blues,
    ...greens,
    ...limes,
    ...monochrome,
    ...oranges,
    ...pinks,
    ...purples,
    ...reds,
    ...teals,
    ...yellows
  },
  blues,
  greens,
  limes,
  monochrome,
  oranges,
  pinks,
  purples,
  reds,
  teals,
  yellows,
  background
};
