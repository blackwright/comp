import { ShadowName } from 'theme/shadows';
import { ColorName } from 'theme/colors';
import { Props as BoxProps } from '../box';

export type Props = {
  /**
   * Shadow from theme.
   * @default md
   */
  shadow?: ShadowName;
  /**
   * Color from theme.
   */
  color?: ColorName;
  /**
   * Background color from theme.
   * @default white
   */
  background?: ColorName;
} & BoxProps;
