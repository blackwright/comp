import { generateColorScale } from '../utils';
import { RGB } from '../types';

const START: RGB = [255, 214, 214];
const BASE: RGB = [210, 27, 8];
const END: RGB = [116, 0, 0];

const colorScale = generateColorScale(START, BASE, END);

export const reds = {
  red1: colorScale[0],
  red2: colorScale[1],
  red3: colorScale[2],
  red4: colorScale[3],
  red5: colorScale[4],
  red6: colorScale[5],
  red7: colorScale[6],
  red8: colorScale[7],
  red9: colorScale[8],
  red10: colorScale[9]
};
