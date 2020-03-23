import React from 'react';
import { Context } from '../context';
import { Props } from './types';

export const RadioGroup: React.FC<Props> = ({
  value,
  name,
  onChange,
  disabled,
  children
}) => {
  const [stateValue, setStateValue] = React.useState<any>(value ?? null);

  React.useEffect(() => {
    setStateValue(value);
  }, [value]);

  const handleChange = (newValue: any) => {
    onChange?.(newValue);

    if (value == null) {
      setStateValue(newValue);
    }
  };

  return (
    <Context.Provider
      value={{
        value: stateValue,
        setValue: handleChange,
        disabled,
        name
      }}
    >
      {children}
    </Context.Provider>
  );
};
