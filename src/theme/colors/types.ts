export type RGB = [number, number, number];

export type ColorScale = readonly [
  RGB,
  RGB,
  RGB,
  RGB,
  RGB,
  RGB,
  RGB,
  RGB,
  RGB,
  RGB
];

export type ColorCSS = {
  rgb: string;
  hex: string;
};

export type ColorValues = {
  value: RGB;
  css: ColorCSS;
};

export enum Brightness {
  LIGHT = 'light',
  DARK = 'dark'
}