import { InteractableComponentProps } from 'types';

export type Props = {
  // Input value
  value?: number;
  // Enforce minimum value
  min?: number;
  // Enforce maximum value
  max?: number;
  // Callback triggered with new value on input change
  onChange?: (value: number | null) => void;
  // Coerce float into integer value
  isInteger?: boolean;
} & Omit<
  InteractableComponentProps<'input'>,
  'value' | 'min' | 'max' | 'onChange'
>;
