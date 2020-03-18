import { ComponentProps } from 'types';
import { VariantName } from 'theme/colors';

export type Props = {
  /**
   * Pill label.
   */
  label: string;
  /**
   * Pill value.
   */
  value?: any;
  /**
   * Color variant.
   * @default neutral
   */
  variant?: VariantName;
  /**
   * Callback with value triggered on click.
   */
  onClick?: (value: any) => void;
} & Omit<ComponentProps<'span'>, 'onClick'>;
