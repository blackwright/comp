import { colors, VariantName } from 'theme/colors';

export function getVariantColors(variant: VariantName, isDisabled?: boolean) {
  if (isDisabled) {
    return colors.variants.disabled;
  }

  return colors.variants[variant];
}
