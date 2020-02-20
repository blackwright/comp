import { colors } from 'theme/colors';

export function getBackgroundColor(isDisabled?: boolean) {
  if (isDisabled) {
    return colors.background.disabled;
  }

  return colors.white;
}

export function getTextColor(isDisabled?: boolean) {
  if (isDisabled) {
    return colors.text.disabled;
  }

  return colors.text.dark;
}
