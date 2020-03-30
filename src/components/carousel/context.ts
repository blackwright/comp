import { createContext } from 'react';

type CarouselContext = {
  index: number;
  setIndex: (newIndex: number) => void;
  disabled?: boolean;
};

export const Context = createContext<CarouselContext>({
  index: 0,
  setIndex: () => {},
  disabled: undefined
});
