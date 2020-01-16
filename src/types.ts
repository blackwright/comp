import React from 'react';

export type TestingProps = {
  // Value of data-testid HTML attribute
  testId?: string;
};

export type ComponentProps<
  T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = TestingProps & Omit<React.ComponentProps<T>, 'ref'>;

export type InteractableComponentProps<
  T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = {
  // Prevents interaction
  isDisabled?: boolean;
} & ComponentProps<T>;
