import { ReactNode } from 'react';

export type Props = {
  // Media query string
  query: string;
  // Render prop callback as result of media query test
  children: (isMatch: boolean) => ReactNode;
};
