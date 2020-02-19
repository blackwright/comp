import { colors, ColorValues } from 'theme/colors';
import { isBright } from 'theme/colors/utils';

export function getBackgroundColor(
  backgroundColor: ColorValues,
  isDisabled?: boolean
) {
  if (isDisabled) {
    return colors.background.disabled;
  }

  return backgroundColor;
}

export function getTextColor(
  backgroundColor: ColorValues,
  isDisabled?: boolean
) {
  if (isDisabled) {
    return colors.text.disabled;
  }

  if (isBright(backgroundColor.value)) {
    return colors.text.dark;
  }

  return colors.text.light;
}
