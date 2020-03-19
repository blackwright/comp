import { Ref } from 'react';
import { Props as InputProps } from 'components/inputs/input';
import { VariantName } from 'theme';

export type Props = {
  /**
   * Inner input element ref.
   */
  ref?: Ref<HTMLInputElement>;
  /**
   * Controlled pill values.
   */
  pillValues?: string[];
  /**
   * Callback triggered with current pill values.
   */
  onPillChange?: (values: readonly string[]) => void;
  /**
   * Controlled input value.
   */
  value?: string;
  /**
   * Color variant.
   * @default neutral
   */
  variant?: VariantName;
} & Omit<InputProps, 'ref' | 'value'>;
