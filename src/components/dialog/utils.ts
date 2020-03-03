import { motion } from 'framer-motion';
import {
  CustomizableComponents,
  MotionComponents,
  CustomizableAnimations
} from './types';
import {
  Wrapper as DefaultWrapper,
  Backdrop as DefaultBackdrop,
  InnerDialog as DefaultInnerDialog
} from './components';
import { defaultBackdropAnimation, defaultDialogAnimation } from './animation';

export function getComponents(
  components: Partial<CustomizableComponents>
): MotionComponents {
  const Backdrop = components.Backdrop ?? DefaultBackdrop;
  const InnerDialog = components.InnerDialog ?? DefaultInnerDialog;
  const Wrapper = components.Wrapper ?? DefaultWrapper;

  return {
    Backdrop: motion.custom(Backdrop),
    InnerDialog: motion.custom(InnerDialog),
    Wrapper
  };
}

export function getAnimations(
  animations: Partial<CustomizableAnimations>
): CustomizableAnimations {
  const backdropAnimation = animations.backdrop ?? defaultBackdropAnimation;
  const dialogAnimation = animations.dialog ?? defaultDialogAnimation;

  return {
    backdrop: backdropAnimation,
    dialog: dialogAnimation
  };
}
