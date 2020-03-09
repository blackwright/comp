import { ComponentProps, TestingProps } from 'types';

export type Props = {
  /**
   * On state
   * @default false
   */
  checked?: boolean;
  /**
   * Callback triggered when toggled
   */
  onChange?: (isChecked: boolean) => void;
  /**
   * Prevents interaction
   * @default false
   */
  isDisabled?: boolean;
} & ComponentProps<'input'> &
  TestingProps;
