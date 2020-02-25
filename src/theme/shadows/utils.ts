import { rgbToCSS } from '../colors/utils';
import { monochrome } from '../colors/raw';
import { sizing } from '../sizing';

export function sizingToShadow(multiplier: number) {
  const top = 0;
  const right = sizing.fn(0.25) + 'px';
  const bottom = sizing.fn(multiplier) + 'px';
  const left = sizing.fn(0.25) * -1 + 'px';
  const rgba = rgbToCSS(monochrome.black, 0.3 * multiplier);

  return `${top} ${right} ${bottom} ${left} ${rgba}`;
}
