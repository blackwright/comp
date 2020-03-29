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
   * Display as inline-flex.
   * @default false
   */
  isInline?: boolean;
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
  px?: Size;
  /**
   * Y-axis padding size.
   */
  py?: Size;
  /**
   * Top padding size.
   */
  pt?: Size;
  /**
   * Right padding size.
   */
  pr?: Size;
  /**
   * Bottom padding size.
   */
  pb?: Size;
  /**
   * Left padding size.
   */
  pl?: Size;
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
  mx?: Size;
  /**
   * Y-axis margin size.
   */
  my?: Size;
  /**
   * Top margin size.
   */
  mt?: Size;
  /**
   * Right margin size.
   */
  mr?: Size;
  /**
   * Bottom margin size.
   */
  mb?: Size;
  /**
   * Left margin size.
   */
  ml?: Size;
};

export type SpacingProps = PaddingProps & MarginProps;

export type Props = ComponentProps<'div'> & FlexProps & SpacingProps;
