import { ComponentProps } from 'types';
import { theme, ColorName } from '../../../theme';

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
   * Background color.
   * Text color is monochrome light or dark, dependent on contrast.
   * @default blue6
   */
  color?: ColorName;
  /**
   * Match parent width.
   * @default false
   */
  isFullWidth?: boolean;
} & ComponentProps<'button'>;
