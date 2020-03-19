import React from 'react';
import { reducer } from './reducer';
import { Wrapper, Pill, Input } from './components';
import { Props } from './types';
import { mergeRefs } from 'utils';

export const PillInput: React.FC<Props> = React.forwardRef(
  (
    {
      testId,
      pillValues,
      onPillChange,
      value,
      onFocus,
      onBlur,
      onKeyDown,
      isFullWidth,
      disabled,
      ...rest
    },
    ref: React.Ref<HTMLInputElement>
  ) => {
    const [state, dispatch] = React.useReducer(reducer, {
      pillValues: pillValues ?? [],
      inputValue: '',
      isFocused: false
    });

    const inputRef = React.useRef<HTMLInputElement | null>(null);

    React.useEffect(
      () => dispatch({ type: 'SET_PILL_VALUES', payload: pillValues ?? [] }),
      [pillValues]
    );

    React.useEffect(
      () => dispatch({ type: 'SET_INPUT_VALUE', payload: value ?? '' }),
      [value]
    );

    const handleWrapperClick = () => inputRef.current?.focus();

    const removePill = (index: number) => {
      if (disabled) {
        return;
      }

      onPillChange?.(state.pillValues.filter((value, i) => i !== index));

      if (pillValues == null) {
        dispatch({ type: 'REMOVE_PILL_VALUE', payload: index });
      }
    };

    const addPill = () => {
      const trimmedValue = state.inputValue.trim();
      if (trimmedValue) {
        onPillChange?.(state.pillValues.concat(trimmedValue));

        if (pillValues == null) {
          dispatch({ type: 'ADD_PILL_VALUE', payload: trimmedValue });
        }
      }
    };

    const removeLastPill = () => {
      onPillChange?.(state.pillValues.slice(0, state.pillValues.length - 1));

      if (pillValues == null) {
        dispatch({ type: 'REMOVE_LAST_PILL' });
      }
    };

    const handleFocus = (focusEvent: React.FocusEvent<HTMLInputElement>) => {
      dispatch({ type: 'FOCUS' });
      onFocus?.(focusEvent);
    };

    const handleBlur = (blurEvent: React.FocusEvent<HTMLInputElement>) => {
      dispatch({ type: 'BLUR' });
      onBlur?.(blurEvent);
    };

    const handleInputChange = (
      changeEvent: React.ChangeEvent<HTMLInputElement>
    ) =>
      dispatch({
        type: 'SET_INPUT_VALUE',
        payload: changeEvent.currentTarget.value
      });

    const handleKeyDown = (
      keyboardEvent: React.KeyboardEvent<HTMLInputElement>
    ) => {
      if (keyboardEvent.key === 'Enter') {
        addPill();
      } else if (keyboardEvent.key === 'Backspace' && !state.inputValue) {
        removeLastPill();
      }

      onKeyDown?.(keyboardEvent);
    };

    const hasPill = state.pillValues.length > 0;

    return (
      <Wrapper
        testId={testId}
        as="div"
        onClick={handleWrapperClick}
        isFocused={state.isFocused}
        isFullWidth={isFullWidth}
        disabled={disabled}
      >
        {state.pillValues.map((value, i) => (
          <Pill
            key={i}
            label={value}
            value={value}
            onClick={() => removePill(i)}
          />
        ))}
        <Input
          ref={mergeRefs([ref, inputRef])}
          value={state.inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          hasPill={hasPill}
          {...rest}
        />
      </Wrapper>
    );
  }
);
