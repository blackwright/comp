import { ComponentProps } from 'types';
import { theme, VariantName } from 'theme';

// Map size keys to x and y padding.
export const sizeStringToPadding = {
  xs: {
    x: theme.sizing.fn(1),
    y: theme.sizing.fn(0.25)
  },
  sm: {
    x: theme.sizing.fn(1.5),
    y: theme.sizing.fn(0.5)
  },
  md: {
    x: theme.sizing.fn(2.5),
    y: theme.sizing.fn(1)
  },
  lg: {
    x: theme.sizing.fn(4),
    y: theme.sizing.fn(1.5)
  },
  xl: {
    x: theme.sizing.fn(5.5),
    y: theme.sizing.fn(2.5)
  }
};

export type Size = keyof typeof sizeStringToPadding;

export type Props = {
  /**
   * Determines preset padding size.
   * @default md
   */
  size?: Size;
  /**
   * Match parent width.
   * @default false
   */
  isFullWidth?: boolean;
  /**
   * Determines preset colors.
   * @default action
   */
  variant?: VariantName;
} & ComponentProps<'button'>;
