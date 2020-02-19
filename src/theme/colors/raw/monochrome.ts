import { RGB } from '../types';

const black: RGB = [0, 0, 0];

// the higher the number, the darker the color
const dark4: RGB = [11, 11, 11];
const dark3: RGB = [27, 27, 27];
const dark2: RGB = [35, 35, 35];
const dark1: RGB = [56, 56, 56];

const gray4: RGB = [120, 120, 120];
const gray3: RGB = [132, 132, 132];
const gray2: RGB = [146, 146, 146];
const gray1: RGB = [160, 160, 160];

const light4: RGB = [218, 218, 218];
const light3: RGB = [236, 236, 236];
const light2: RGB = [242, 242, 242];
const light1: RGB = [248, 248, 248];

const white: RGB = [255, 255, 255];

export const monochrome = {
  black,
  dark4,
  dark3,
  dark2,
  dark1,
  gray4,
  gray3,
  gray2,
  gray1,
  light4,
  light3,
  light2,
  light1,
  white
};
