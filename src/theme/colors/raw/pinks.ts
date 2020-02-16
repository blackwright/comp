import { generateColorScale } from '../utils';
import { RGB } from '../types';

const START: RGB = [255, 221, 235];
const BASE: RGB = [231, 85, 139];
const END: RGB = [138, 26, 69];

const colorScale = generateColorScale(START, BASE, END);

export const pinks = {
  pink1: colorScale[0],
  pink2: colorScale[1],
  pink3: colorScale[2],
  pink4: colorScale[3],
  pink5: colorScale[4],
  pink6: colorScale[5],
  pink7: colorScale[6],
  pink8: colorScale[7],
  pink9: colorScale[8],
  pink10: colorScale[9]
};
