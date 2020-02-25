import { ComponentProps } from 'types';
import { theme } from 'theme';
import {
  AlignItemsProperty,
  JustifyContentProperty,
  FlexFlowProperty,
  FlexProperty
} from 'csstype';

export const sizeStringToNumberValue = {
  xs: theme.sizing.fn(1),
  sm: theme.sizing.fn(2),
  md: theme.sizing.fn(4),
  lg: theme.sizing.fn(8),
  xl: theme.sizing.fn(10)
};

export type MappedSize = keyof typeof sizeStringToNumberValue;

export type Size = number | string;

type FlexProps = {
  /**
   * flex property.
   * @default '1 1 0'
   */
  flex?: FlexProperty<1 | 2 | 3>;
  /**
   * flex-flow property.
   * @default 'row wrap'
   */
  flow?: FlexFlowProperty;
  /**
   * align-items property.
   * @default 'stretch'
   */
  alignItems?: AlignItemsProperty;
  /**
   * justify-content property.
   * @default 'flex-start'
   */
  justifyContent?: JustifyContentProperty;
};

// x/y sizing overrides overall sizing.
// top/right/bottom/left sizing overrides overall and x/y sizing.
export type PaddingProps = {
  /**
   * Overall padding size.
   */
  p?: Size;
  /**
   * X-axis padding size.
   */
  pX?: Size;
  /**
   * Y-axis padding size.
   */
  pY?: Size;
  /**
   * Top padding size.
   */
  pTop?: Size;
  /**
   * Right padding size.
   */
  pRight?: Size;
  /**
   * Bottom padding size.
   */
  pBottom?: Size;
  /**
   * Left padding size.
   */
  pLeft?: Size;
};

// x/y sizing overrides overall sizing.
// top/right/bottom/left sizing overrides overall and x/y sizing.
export type MarginProps = {
  /**
   * Overall margin size.
   */
  m?: Size;
  /**
   * X-axis margin size.
   */
  mX?: Size;
  /**
   * Y-axis margin size.
   */
  mY?: Size;
  /**
   * Top margin size.
   */
  mTop?: Size;
  /**
   * Right margin size.
   */
  mRight?: Size;
  /**
   * Bottom margin size.
   */
  mBottom?: Size;
  /**
   * Left margin size.
   */
  mLeft?: Size;
};

export type SpacingProps = PaddingProps & MarginProps;

export type Props = ComponentProps<'div'> & FlexProps & SpacingProps;
