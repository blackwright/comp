import { ComponentProps, ComponentType } from 'types';
import { AlignItemsProperty } from 'csstype';
import { LabelProps, VisibleCheckboxProps } from './components';

type TestingProps = {
  /**
   * Label test id.
   */
  labelTestId?: string;
  /**
   * Visible checkbox test id.
   */
  visibleTestId?: string;
};

export type CustomizableComponents = {
  Label: ComponentType<LabelProps>;
  VisibleCheckbox: ComponentType<VisibleCheckboxProps>;
  Description: ComponentType<{}>;
};

export type Props = {
  /**
   * Flex item alignment.
   */
  alignItems?: AlignItemsProperty;
  /**
   * Custom components.
   * Renders default components when not provided.
   */
  components?: Partial<CustomizableComponents>;
} & TestingProps &
  Omit<ComponentProps<'input'>, 'type'>;
