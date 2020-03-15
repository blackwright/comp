import { Options } from './types';

export function isVirtualized<Option>(
  virtualizedThreshold: number,
  options?: Options<Option>
) {
  if (!options) {
    return false;
  }

  let count = 0;

  for (const option of options) {
    if ('options' in option) {
      count += option.options.length;
    } else {
      count += 1;
    }

    if (count >= virtualizedThreshold) {
      return true;
    }
  }

  return false;
}
