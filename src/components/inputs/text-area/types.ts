import { ComponentProps } from 'types';

export type Props = {
  // Automatically resize to fit contents
  fitContents?: boolean;
} & ComponentProps<'textarea'>;
