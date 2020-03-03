import { Ref } from 'react';
import { ComponentProps } from 'types';

export type Props = {
  /**
   * React ref - does not support string refs.
   */
  ref: Ref<Element>;
  /**
   * Append DOM node to end of document body.
   * @default true
   */
  usePortal?: boolean;
} & Omit<ComponentProps<'div'>, 'onAnimationStart'>;
