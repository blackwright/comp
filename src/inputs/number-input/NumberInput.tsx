import React from 'react';
import { Props } from './types';
import { enforceBounds } from './utils';

export const NumberInput: React.FC<Props> = React.forwardRef(
  (
    {
      testId,
      value,
      min,
      max,
      isInteger,
      onChange,
      onKeyDown,
      disabled,
      isDisabled,
      ...rest
    },
    ref: React.Ref<HTMLInputElement>
  ) => {
    const internalDisabled = disabled || isDisabled;

    const [val, setVal] = React.useState<number | null | undefined>(value);

    React.useEffect(() => {
      setVal(enforceBounds(value, min, max, isInteger));
    }, [value, min, max, isInteger]);

    const handleChange = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
      const { value: newValue } = changeEvent.currentTarget;

      const newNumber = newValue
        ? enforceBounds(parseFloat(newValue), min, max, isInteger)
        : null;

      onChange?.(newNumber);

      if (value == null) {
        setVal(newNumber);
      }
    };

    const handleKeyDown = (
      keyDownEvent: React.KeyboardEvent<HTMLInputElement>
    ) => {
      if (isInteger && keyDownEvent.key === '.') {
        keyDownEvent.preventDefault();
      }

      onKeyDown?.(keyDownEvent);
    };

    return (
      <input
        data-testid={testId}
        ref={ref}
        value={val ?? ''}
        type="number"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={internalDisabled}
        {...rest}
      />
    );
  }
);

NumberInput.defaultProps = {
  testId: 'number-input',
  isInteger: false,
  isDisabled: false
};
