import { ShadowName } from 'theme/shadows';
import { ColorName } from 'theme/colors';
import { Props as BlockProps } from '../block';

export type Props = {
  /**
   * Shadow from theme.
   * @default md
   */
  shadow?: ShadowName;
  /**
   * Color from theme.
   * @default white
   */
  color?: ColorName;
} & BlockProps;
