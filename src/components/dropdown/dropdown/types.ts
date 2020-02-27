import { ReactElement } from 'react';
import { Placement } from 'popper.js';
import { AnimationProps, MotionAdvancedProps } from 'framer-motion';
import { ComponentType, TestingProps } from 'types';
import { ListProps } from './components';

export type CustomizableComponents = {
  Card?: ComponentType<{}>;
  List?: ComponentType<ListProps>;
};

export type Props = {
  /**
   * Component for triggering the dropdown list.
   */
  trigger: ReactElement;
  /**
   * For controlling the dropdown's open state from its parent.
   */
  isOpen?: boolean;
  /**
   * Callback that runs when trigger component is clicked.
   */
  onClick?: (isOpen: boolean) => void;
  /**
   * Popper placement
   * @default bottom-start
   */
  placement?: Placement;
  /**
   * Whether the minimum list width should match the
   * trigger element width.
   */
  matchTriggerWidth?: boolean;
  /**
   * Prevents trigger from firing.
   */
  disabled?: boolean;
  /**
   * Animation props.
   */
  animation?: AnimationProps & MotionAdvancedProps;
  /**
   * Custom components.
   * Renders default components when not provided.
   */
  components?: Partial<CustomizableComponents>;
} & TestingProps;
