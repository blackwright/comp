import { ComponentProps } from 'types';

export type Props = Pick<ComponentProps<'input'>, 'checked' | 'disabled'>;
