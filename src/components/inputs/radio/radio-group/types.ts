export type Props = {
  /**
   * Selected value. If a child Radio has a matching value,
   * it renders as checked.
   */
  value: any;
  /**
   * Name attribute rendered on all Radio children.
   */
  name?: string;
  /**
   * Triggered with value of selected Radio child.
   */
  onChange?: (newValue: any) => void;
  /**
   * Disables all Radio children.
   */
  disabled?: boolean;
};
