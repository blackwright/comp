export type State = {
  pillValues: ReadonlyArray<string>;
  inputValue: string;
  isFocused: boolean;
};

export type Action =
  | { type: 'FOCUS' }
  | { type: 'BLUR' }
  | { type: 'SET_PILL_VALUES'; payload: ReadonlyArray<string> }
  | { type: 'ADD_PILL_VALUE'; payload: string }
  | { type: 'REMOVE_LAST_PILL' }
  | { type: 'REMOVE_PILL_VALUE'; payload: number }
  | { type: 'SET_INPUT_VALUE'; payload: string };
