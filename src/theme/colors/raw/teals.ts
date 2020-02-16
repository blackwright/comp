import { generateColorScale } from '../utils';
import { RGB } from '../types';

const START: RGB = [213, 250, 245];
const BASE: RGB = [4, 186, 165];
const END: RGB = [0, 101, 88];

const colorScale = generateColorScale(START, BASE, END);

export const teals = {
  teal1: colorScale[0],
  teal2: colorScale[1],
  teal3: colorScale[2],
  teal4: colorScale[3],
  teal5: colorScale[4],
  teal6: colorScale[5],
  teal7: colorScale[6],
  teal8: colorScale[7],
  teal9: colorScale[8],
  teal10: colorScale[9]
};
