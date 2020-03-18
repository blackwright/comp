import { ComponentProps } from 'types';

export type Props = {
  /**
   * Whether pill exists.
   */
  hasPill: boolean;
} & ComponentProps<'input'>;
