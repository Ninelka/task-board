import { DraggableLocation } from 'react-beautiful-dnd';

export const moveTaskToAnotherColumn = (
  newStartTaskIds: string[],
  newFinishTaskIds: string[],
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation
) => {
  const sourceClone = Array.from(newStartTaskIds);
  const destClone = Array.from(newFinishTaskIds);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  return {
    sourceClone,
    destClone,
  };
};
