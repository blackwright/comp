import { AlignItemsProperty } from 'csstype';
import { InteractableComponentProps } from 'types';

export type Props = {
  alignItems?: AlignItemsProperty;
} & InteractableComponentProps<'label'>;
