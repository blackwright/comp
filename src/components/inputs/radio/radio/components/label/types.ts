import { AlignItemsProperty } from 'csstype';
import { ComponentProps } from 'types';

export type Props = {
  alignItems?: AlignItemsProperty;
} & ComponentProps<'label'>;
