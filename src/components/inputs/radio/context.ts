import * as React from 'react';

type RadioContext = {
  value: any;
  setValue: (newValue: any) => void;
  name?: string;
};

export const Context = React.createContext<RadioContext>({
  value: undefined,
  name: undefined,
  setValue: () => {}
});
