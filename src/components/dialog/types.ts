import {
  MotionProps,
  AnimationProps,
  MotionAdvancedProps
} from 'framer-motion';
import { ComponentType, TestingProps } from 'types';
import { WrapperProps, BackdropProps, InnerDialogProps } from './components';

export type CustomizableComponents<T = {}> = {
  Wrapper: ComponentType<WrapperProps>;
  Backdrop: ComponentType<BackdropProps & T>;
  InnerDialog: ComponentType<InnerDialogProps & T>;
};

export type CustomizableAnimations = Record<
  'backdrop' | 'dialog',
  AnimationProps & MotionAdvancedProps
>;

export type MotionComponents = CustomizableComponents<MotionProps>;

export type Props = {
  /**
   * Open state.
   */
  isOpen: boolean;
  /**
   * Callback triggered when closed.
   */
  onClose?: () => void;
  /**
   * Append DOM node to end of document body.
   * @default true
   */
  usePortal?: boolean;
  /**
   * Render backdrop under dialog.
   * @default true
   */
  useBackdrop?: boolean;
  /**
   * Custom components.
   * Renders default components when not provided.
   */
  components?: Partial<CustomizableComponents>;
  /**
   * Custom animations.
   * Uses default animations when not provided.
   */
  animations?: Partial<CustomizableAnimations>;
} & TestingProps;
