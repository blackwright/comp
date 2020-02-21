import { Ref } from 'react';
import { ComponentProps } from 'types';

export type Props = {
  ref?: Ref<HTMLInputElement>;
  /**
   * Match parent width.
   * @default false
   */
  isFullWidth?: boolean;
} & Omit<ComponentProps<'input'>, 'ref'>;
