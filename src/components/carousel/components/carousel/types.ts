export type Props = {
  /**
   * Carousel index.
   * @default 0
   */
  index?: number;
  /**
   * Callback triggered with new index.
   */
  onChange?: (newIndex: number) => void;
  /**
   * Prevents interaction.
   * @default false
   */
  disabled?: boolean;
};
