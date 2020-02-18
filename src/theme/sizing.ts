const SPACING_VALUE = 8;

export function sizingFn(multiplier = 1) {
  return SPACING_VALUE * multiplier;
}

export const sizing = {
  fn: sizingFn,
  borderRadius: sizingFn(0.5) + 'px'
};
