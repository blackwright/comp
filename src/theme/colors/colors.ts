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
import { darken } from './utils';
import { VariantName, VariantColors } from './types';

const text = {
  light: monochrome.light1,
  dark: monochrome.dark4
};

const variants: Record<VariantName, VariantColors> = {
  disabled: {
    text: monochrome.gray1,
    background: {
      passive: monochrome.light4,
      hover: monochrome.light4,
      active: monochrome.light4
    }
  },
  action: {
    text: monochrome.light1,
    background: {
      passive: blues.blue6,
      hover: darken(blues.blue6),
      active: darken(blues.blue6, 1.5)
    }
  },
  positive: {
    text: monochrome.light1,
    background: {
      passive: greens.green6,
      hover: darken(greens.green6),
      active: darken(greens.green6, 1.5)
    }
  },
  negative: {
    text: monochrome.light1,
    background: {
      passive: reds.red5,
      hover: darken(reds.red5),
      active: darken(reds.red5, 1.5)
    }
  },
  neutral: {
    text: monochrome.dark4,
    background: {
      passive: monochrome.light4,
      hover: darken(monochrome.light4, 0.3),
      active: darken(monochrome.light4, 0.5)
    }
  },
  error: {
    text: monochrome.light1,
    background: {
      passive: reds.red8,
      hover: darken(reds.red8),
      active: darken(reds.red8, 1.5)
    }
  },
  warning: {
    text: monochrome.dark4,
    background: {
      passive: yellows.yellow6,
      hover: darken(yellows.yellow6, 0.3),
      active: darken(yellows.yellow6)
    }
  }
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
  variants,
  text
};
