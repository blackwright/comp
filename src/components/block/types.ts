import { ComponentProps } from 'types';
import theme from 'theme';

export const sizeStringToNumberValue = {
  xs: theme.spacing(1),
  sm: theme.spacing(2),
  md: theme.spacing(4),
  lg: theme.spacing(8),
  xl: theme.spacing(10)
};

export type MappedSize = keyof typeof sizeStringToNumberValue;

export type Size = number | string;

// x/y sizing overrides overall sizing.
// top/right/bottom/left sizing overrides overall and x/y sizing.
export type PaddingProps = {
  /**
   * Overall padding size
   */
  p?: Size;
  /**
   * X-axis padding size
   */
  pX?: Size;
  /**
   * Y-axis padding size
   */
  pY?: Size;
  /**
   * Top padding size
   */
  pTop?: Size;
  /**
   * Right padding size
   */
  pRight?: Size;
  /**
   * Bottom padding size
   */
  pBottom?: Size;
  /**
   * Left padding size
   */
  pLeft?: Size;
};

// x/y sizing overrides overall sizing.
// top/right/bottom/left sizing overrides overall and x/y sizing.
export type MarginProps = {
  /**
   * Overall padding size
   */
  m?: Size;
  /**
   * X-axis padding size
   */
  mX?: Size;
  /**
   * Y-axis padding size
   */
  mY?: Size;
  /**
   * Top padding size
   */
  mTop?: Size;
  /**
   * Right padding size
   */
  mRight?: Size;
  /**
   * Bottom padding size
   */
  mBottom?: Size;
  /**
   * Left padding size
   */
  mLeft?: Size;
};

export type Props = ComponentProps<'div'> & PaddingProps & MarginProps;
