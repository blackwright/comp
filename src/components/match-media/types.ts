import { ReactNode } from 'react';
import { Dictionary } from 'types';

export type Query = string | Dictionary<string>;

export type Props<Q extends Query> = {
  // Media query string
  query: Q;
  // Render prop callback as result of media query test
  children: (
    isMatch: Q extends string ? boolean : Dictionary<boolean>
  ) => ReactNode;
};
