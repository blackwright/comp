import { ComponentProps } from 'types';
import { VariantName } from 'theme/colors';

export type Props = {
  /**
   * Determines coloration.
   * @default neutral
   */
  variant?: VariantName;
} & ComponentProps<'span'>;
