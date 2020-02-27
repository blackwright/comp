import { ComponentProps } from 'types';

export type Props = {
  /**
   * Prevents interaction.
   * @default false
   */
  disabled?: boolean;
} & ComponentProps<'li'>;
