import chroma, { Color } from 'chroma-js';
import { RGB, ColorScale, ColorValues, Brightness } from './types';

/**
 * Generates a color scale from a base RGB color, producing
 * darker and brighter shades of that color as an array of RGB
 * values. The length of this array must match the ColorScale
 * tuple type length.
 *
 * Starting color scale value
 * @param start
 *
 * Ending color scale value
 * @param end
 */
export function generateColorScale(
  start: RGB,
  base: RGB,
  end: RGB
): ColorScale {
  const interval = 0.1;

  const scale = chroma
    .scale([
      // types do not handle RGB values well
      (start as unknown) as Color,
      (base as unknown) as Color,
      (end as unknown) as Color
    ])
    .domain([0, 0.5, 1]);

  const result = [];

  for (let i = 0; i <= 1; i += interval) {
    const scaleColor = scale(i);
    result.push(scaleColor.rgb());
  }

  return (result as ReadonlyArray<RGB>) as ColorScale;
}

export function rgbToCSS(color: RGB, alpha?: number) {
  const chromafied = alpha == null ? chroma(color) : chroma(color).alpha(alpha);
  return chromafied.css();
}

export function rgbToHex(color: RGB) {
  return chroma(color).hex();
}

export function addCSSToColorDictionary<T>(dictionary: T) {
  return Object.entries(dictionary).reduce((acc, [key, value]) => {
    acc[key as keyof typeof dictionary] = {
      value,
      css: {
        rgb: rgbToCSS(value),
        hex: rgbToHex(value)
      }
    };
    return acc;
  }, {} as Record<keyof typeof dictionary, ColorValues>);
}

export function getBrightness(color: RGB): Brightness {
  return chroma(color).get('lab.l') < 65 ? Brightness.DARK : Brightness.LIGHT;
}
