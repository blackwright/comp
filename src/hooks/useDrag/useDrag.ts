import React from 'react';
import { reducer } from './reducer';
import { Position, DragEvent, Callback, DragHandlers } from './types';

export function useDrag(callback: Callback): DragHandlers {
  const [state, dispatch] = React.useReducer(reducer, {
    event: null,
    initialPosition: null,
    currentPosition: null,
    deltaX: 0,
    deltaY: 0,
    isDown: false
  });

  const setDown = React.useCallback(
    (event: DragEvent, initialPosition: Position) => {
      dispatch({ type: 'DOWN', payload: { event, initialPosition } });
    },
    [dispatch]
  );

  const setMove = React.useCallback(
    (event: DragEvent, currentPosition: Position) => {
      dispatch({ type: 'MOVE', payload: { event, currentPosition } });
    },
    [dispatch]
  );

  const setUp = React.useCallback(
    (event: DragEvent, currentPosition: Position) => {
      dispatch({ type: 'UP', payload: { event, currentPosition } });
    },
    [dispatch]
  );

  const handleMouseDown = React.useCallback(
    (event: React.MouseEvent) =>
      setDown(event.nativeEvent, { x: event.clientX, y: event.clientY }),
    [setDown]
  );

  const handleMouseMove = React.useCallback(
    (event: React.MouseEvent) => {
      setMove(event.nativeEvent, { x: event.clientX, y: event.clientY });
    },
    [setMove]
  );

  const handleTouchStart = React.useCallback(
    (event: React.TouchEvent) => {
      event.preventDefault();

      const { clientX: x, clientY: y } = event.touches[0];
      setDown(event.nativeEvent, { x, y });
    },
    [setDown]
  );

  const handleTouchMove = React.useCallback(
    (event: React.TouchEvent) => {
      event.preventDefault();

      const { clientX: x, clientY: y } = event.changedTouches[0];
      setMove(event.nativeEvent, { x, y });
    },
    [setMove]
  );

  React.useEffect(() => {
    callback(state);
  }, [callback, state]);

  // Attach window listeners for mouseup/touchend events in case
  // the drag ends outside of the bound element.
  React.useEffect(() => {
    const handleMouseUp = (event: MouseEvent) => {
      setUp(event, { x: event.clientX, y: event.clientY });
    };

    const handleTouchEnd = (event: TouchEvent) => {
      const { clientX: x, clientY: y } = event.changedTouches[0];
      setUp(event, { x, y });
    };

    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchcancel', handleTouchEnd);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [setUp]);

  const dragHandlers = React.useMemo(
    () => ({
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove
    }),
    [handleMouseDown, handleMouseMove, handleTouchStart, handleTouchMove]
  );

  return dragHandlers;
}
