import { ComponentProps } from 'types';

export type Props = {
  /**
   * Hover state
   */
  isHovered: boolean;
} & Omit<ComponentProps<'input'>, 'type'>;
