import theme from 'theme';
import { ComponentProps } from 'types';

export type Variant = keyof typeof theme.font.variants;

export type Props = {
  // HTML element rendered
  as?: keyof JSX.IntrinsicElements;
  // Determines properties such as size, line-height, and weight
  variant?: Variant;
} & ComponentProps<'span'>;
