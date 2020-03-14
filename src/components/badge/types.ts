import { ComponentProps } from 'types';
import { ColorValues, colors } from 'theme/colors';

type VariantStyle = {
  color: ColorValues;
  background: ColorValues;
};

export const variantToColorsMapping: Record<
  'positive' | 'negative' | 'neutral' | 'error' | 'warning',
  VariantStyle
> = {
  positive: {
    color: colors.green10,
    background: colors.green1
  },
  negative: {
    color: colors.red10,
    background: colors.red1
  },
  neutral: {
    color: colors.dark4,
    background: colors.light3
  },
  error: {
    color: colors.text.light,
    background: colors.red8
  },
  warning: {
    color: colors.yellow10,
    background: colors.yellow2
  }
};

export type VariantName = keyof typeof variantToColorsMapping;

export type Props = {
  /**
   * Determines coloration.
   * @default neutral
   */
  variant?: VariantName;
} & ComponentProps<'span'>;
