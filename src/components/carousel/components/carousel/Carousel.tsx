import React from 'react';
import { Context } from '../../context';
import { Props } from './types';

export const Carousel: React.FC<Props> = ({
  index,
  onChange,
  disabled,
  children
}) => {
  const [stateIndex, setStateIndex] = React.useState(index ?? 0);

  React.useEffect(() => {
    setStateIndex(index ?? 0);
  }, [index]);

  const handleChange = (newIndex: number) => {
    onChange?.(newIndex);

    if (index == null) {
      setStateIndex(newIndex);
    }
  };

  return (
    <Context.Provider
      value={{
        index: stateIndex,
        setIndex: handleChange,
        disabled
      }}
    >
      {children}
    </Context.Provider>
  );
};

Carousel.defaultProps = {
  index: 0
};
