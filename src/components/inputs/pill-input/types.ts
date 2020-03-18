import { Ref } from 'react';
import { Props as InputProps } from 'components/inputs/input';

export type Props = {
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
} & Omit<InputProps, 'ref' | 'value'>;
