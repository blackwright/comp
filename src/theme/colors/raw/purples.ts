import { generateColorScale } from '../utils';
import { RGB } from '../types';

const START: RGB = [233, 222, 255];
const BASE: RGB = [131, 88, 223];
const END: RGB = [53, 25, 115];

const colorScale = generateColorScale(START, BASE, END);

export const purples = {
  purple1: colorScale[0],
  purple2: colorScale[1],
  purple3: colorScale[2],
  purple4: colorScale[3],
  purple5: colorScale[4],
  purple6: colorScale[5],
  purple7: colorScale[6],
  purple8: colorScale[7],
  purple9: colorScale[8],
  purple10: colorScale[9]
};
