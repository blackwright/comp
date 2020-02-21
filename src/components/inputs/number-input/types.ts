import { Props as InputProps } from '../input/types';

export type Props = {
  /**
   * Input value.
   */
  value?: number;
  /**
   * Enforce minimum value.
   * onChange only triggered when new value passes validation.
   */
  min?: number;
  /**
   * Enforce maximum value.
   * onChange only triggered when new value passes validation.s
   */
  max?: number;
  /**
   * Callback triggered with new value on input change.
   */
  onChange?: (value: number | null) => void;
  /**
   * Only accept integer values.
   * Floats are coerced into integers.
   */
  isInteger?: boolean;
} & Omit<InputProps, 'value' | 'min' | 'max' | 'onChange'>;
