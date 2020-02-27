import { AlignItemsProperty } from 'csstype';
import { ComponentProps, ComponentType } from 'types';
import { LabelProps, VisibleRadioProps } from './components';

type TestingProps = {
  labelTestId?: string;
  visibleTestId?: string;
};

type CustomComponents = {
  Label?: ComponentType<LabelProps>;
  VisibleRadio?: ComponentType<VisibleRadioProps>;
  Description?: ComponentType<{}>;
};

export type Props = {
  /**
   * Option value. The radio renders as selected if it
   * matches the RadioGroup value.
   */
  value: any;
  /**
   * Flex item alignment.
   */
  alignItems?: AlignItemsProperty;
  /**
   * Custom components.
   * Renders default components when not provided.
   */
  components?: CustomComponents;
} & TestingProps &
  Omit<ComponentProps<'input'>, 'type'>;
