import { Ref } from 'react';
import { ComponentProps } from 'types';

export type Props = {
  ref?: Ref<HTMLInputElement>;
  /**
   * Extend to 100% width of parent
   * @default false
   */
  isFullWidth?: boolean;
} & Omit<ComponentProps<'input'>, 'ref'>;
