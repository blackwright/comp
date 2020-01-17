export function enforceBounds(
  value?: number,
  min?: number,
  max?: number,
  isInteger?: boolean
): number | null {
  if (value == null) {
    return null;
  }

  if (min != null) {
    value = Math.max(value, min);
  }

  if (max != null) {
    value = Math.min(value, max);
  }

  if (isInteger) {
    value = Math.floor(value);
  }

  return value;
}
