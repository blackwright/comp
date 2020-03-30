export type Position = {
  x: number;
  y: number;
};

export type DragEvent = MouseEvent | TouchEvent;

export type State = {
  event: DragEvent | null;
  initialPosition: Position | null;
  currentPosition: Position | null;
  deltaX: number;
  deltaY: number;
  isDown: boolean;
};

export type Action =
  | {
      type: 'DOWN';
      payload: {
        event: DragEvent;
        initialPosition: Position;
      };
    }
  | {
      type: 'UP';
      payload: {
        event: DragEvent;
        currentPosition: Position;
      };
    }
  | {
      type: 'MOVE';
      payload: {
        event: DragEvent;
        currentPosition: Position;
      };
    };

export type Callback = (state: State) => void;

export type DragHandlers = {
  onMouseDown: (e: React.MouseEvent) => void;
  onMouseMove: (e: React.MouseEvent) => void;
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchMove: (e: React.TouchEvent) => void;
};
