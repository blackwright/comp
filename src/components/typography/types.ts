import theme, { ColorName } from 'theme';
import { ComponentProps } from 'types';

export type Variant = keyof typeof theme.font.variants;

export type Props = {
  /**
   * HTML element rendered
   * @default span
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * Determines properties such as size, line-height, and weight
   * @default normal
   */
  variant?: Variant;
  /**
   * Text color from available theme colors.
   * If undefined, color is inherited from parent.
   */
  color?: ColorName;
} & ComponentProps<'span'>;
