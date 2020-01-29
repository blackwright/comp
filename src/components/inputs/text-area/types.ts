import { InteractableComponentProps } from 'types';

export type Props = {
  // Automatically resize to fit contents
  fitContents?: boolean;
} & InteractableComponentProps<'textarea'>;
