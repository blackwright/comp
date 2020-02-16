import { generateColorScale } from '../utils';
import { RGB } from '../types';

const START: RGB = [217, 241, 255];
const BASE: RGB = [1, 131, 189];
const END: RGB = [0, 68, 107];

const colorScale = generateColorScale(START, BASE, END);

export const blues = {
  blue1: colorScale[0],
  blue2: colorScale[1],
  blue3: colorScale[2],
  blue4: colorScale[3],
  blue5: colorScale[4],
  blue6: colorScale[5],
  blue7: colorScale[6],
  blue8: colorScale[7],
  blue9: colorScale[8],
  blue10: colorScale[9]
};
