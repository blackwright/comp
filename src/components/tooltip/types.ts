import { ReactElement } from 'react';
import { AnimationProps, MotionAdvancedProps } from 'framer-motion';
import { Placement } from 'popper.js';
import { ComponentType, TestingProps } from 'types';
import { ColorName } from 'theme';

type CustomizableComponents = {
  Content: ComponentType<{}>;
};

export type Props = {
  /**
   * Element acting as tooltip anchor.
   */
  trigger: ReactElement;
  /**
   * Open state.
   */
  isOpen?: boolean;
  /**
   * Background color from theme.
   * @default dark1
   */
  background?: ColorName;
  /**
   * Popper placement
   * @default top
   */
  placement?: Placement;
  /**
   * Custom components.
   * Renders default components when not provided.
   */
  components?: Partial<CustomizableComponents>;
  /**
   * Custom animation.
   * Renders default animation when not provided.
   */
  animation?: AnimationProps & MotionAdvancedProps;
} & TestingProps;
