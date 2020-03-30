import React from 'react';
import { useDrag } from 'hooks/useDrag';
import { State as DragState } from 'hooks/useDrag/types';

export default {
  title: 'Layout/Carousel'
};

export const Default = () => {
  const handleDragState = (state: DragState) => console.log('state', state);

  const dragHandlers = useDrag(handleDragState);

  return (
    <div
      style={{ width: '50vw', height: '50vh', background: 'grey' }}
      {...dragHandlers}
    />
  );
};
