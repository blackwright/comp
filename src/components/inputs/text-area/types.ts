import { ComponentProps } from 'types';

export type Props = {
  /**
   * Automatically resize to fit contents.
   */
  fitContents?: boolean;
  /**
   * Match parent width.
   */
  isFullWidth?: boolean;
  /**
   * Allow resizing by dragging handle.
   */
  isResizable?: boolean;
} & ComponentProps<'textarea'>;
