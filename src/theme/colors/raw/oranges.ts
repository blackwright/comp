import { generateColorScale } from '../utils';
import { RGB } from '../types';

const START: RGB = [255, 235, 209];
const BASE: RGB = [245, 145, 38];
const END: RGB = [157, 64, 0];

const colorScale = generateColorScale(START, BASE, END);

export const oranges = {
  orange1: colorScale[0],
  orange2: colorScale[1],
  orange3: colorScale[2],
  orange4: colorScale[3],
  orange5: colorScale[4],
  orange6: colorScale[5],
  orange7: colorScale[6],
  orange8: colorScale[7],
  orange9: colorScale[8],
  orange10: colorScale[9]
};
