import { State, Action } from './types';

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'DOWN': {
      const { event, initialPosition } = action.payload;

      return {
        ...state,
        isDown: true,
        currentPosition: { ...initialPosition },
        deltaX: 0,
        deltaY: 0,
        initialPosition,
        event
      };
    }

    case 'UP': {
      if (!state.isDown || !state.initialPosition) {
        return state;
      }

      const { event, currentPosition } = action.payload;

      return {
        ...state,
        isDown: false,
        deltaX: currentPosition.x - state.initialPosition.x,
        deltaY: currentPosition.y - state.initialPosition.y,
        currentPosition,
        event
      };
    }

    case 'MOVE': {
      if (!state.isDown || !state.initialPosition) {
        return state;
      }

      const { event, currentPosition } = action.payload;

      return {
        ...state,
        deltaX: currentPosition.x - state.initialPosition.x,
        deltaY: currentPosition.y - state.initialPosition.y,
        currentPosition,
        event
      };
    }

    default:
      return state;
  }
}
