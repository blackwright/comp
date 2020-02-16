import { generateColorScale } from '../utils';
import { RGB } from '../types';

const START: RGB = [255, 251, 204];
const BASE: RGB = [250, 208, 1];
const END: RGB = [148, 100, 0];

const colorScale = generateColorScale(START, BASE, END);

export const yellows = {
  yellow1: colorScale[0],
  yellow2: colorScale[1],
  yellow3: colorScale[2],
  yellow4: colorScale[3],
  yellow5: colorScale[4],
  yellow6: colorScale[5],
  yellow7: colorScale[6],
  yellow8: colorScale[7],
  yellow9: colorScale[8],
  yellow10: colorScale[9]
};
