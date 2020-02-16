import { generateColorScale } from '../utils';
import { RGB } from '../types';

const START: RGB = [217, 250, 229];
const BASE: RGB = [1, 158, 82];
const END: RGB = [0, 87, 36];

const colorScale = generateColorScale(START, BASE, END);

export const greens = {
  green1: colorScale[0],
  green2: colorScale[1],
  green3: colorScale[2],
  green4: colorScale[3],
  green5: colorScale[4],
  green6: colorScale[5],
  green7: colorScale[6],
  green8: colorScale[7],
  green9: colorScale[8],
  green10: colorScale[9]
};
