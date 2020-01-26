import { ComponentProps } from 'types';

export type Props = {
  isHovered: boolean;
} & Omit<ComponentProps<'input'>, 'type'>;
