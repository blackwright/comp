import { State, Action } from './types';

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'FOCUS':
      return {
        ...state,
        isFocused: true
      };
    case 'BLUR':
      return {
        ...state,
        isFocused: false
      };
    case 'SET_PILL_VALUES':
      return {
        ...state,
        pillValues: action.payload
      };
    case 'SET_INPUT_VALUE':
      return {
        ...state,
        inputValue: action.payload
      };
    case 'REMOVE_LAST_PILL':
      return {
        ...state,
        pillValues: state.pillValues.slice(0, state.pillValues.length - 1)
      };
    case 'REMOVE_PILL_VALUE':
      return {
        ...state,
        pillValues: state.pillValues.filter((val, i) => i !== action.payload)
      };
    case 'ADD_PILL_VALUE':
      return {
        ...state,
        pillValues: state.pillValues.concat(action.payload),
        inputValue: ''
      };
    default:
      return state;
  }
}
