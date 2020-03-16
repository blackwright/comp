import { createContext } from 'react';

type RadioContext = {
  value: any;
  setValue: (newValue: any) => void;
  name?: string;
  disabled?: boolean;
};

export const Context = createContext<RadioContext>({
  value: undefined,
  name: undefined,
  disabled: undefined,
  setValue: () => {}
});
