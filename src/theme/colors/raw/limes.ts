import { generateColorScale } from '../utils';
import { RGB } from '../types';

const START: RGB = [236, 255, 199];
const BASE: RGB = [140, 202, 6];
const END: RGB = [76, 119, 0];

const colorScale = generateColorScale(START, BASE, END);

export const limes = {
  lime1: colorScale[0],
  lime2: colorScale[1],
  lime3: colorScale[2],
  lime4: colorScale[3],
  lime5: colorScale[4],
  lime6: colorScale[5],
  lime7: colorScale[6],
  lime8: colorScale[7],
  lime9: colorScale[8],
  lime10: colorScale[9]
};
