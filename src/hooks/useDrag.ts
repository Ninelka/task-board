import { DropResult } from 'react-beautiful-dnd';
import {
  moveTask,
  reorderTasks,
  useAppDispatch,
  useAppSelector,
} from '../store';
import { reorderList, moveTaskToAnotherColumn } from '../lib';

export const useDrag = () => {
  const { columns } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const onDragEndHandler = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startColumn = columns.find((item) => item.id === source.droppableId);
    const finishColumn = columns.find(
      (item) => item.id === destination.droppableId
    );

    let newTaskIds;

    if (source.droppableId === destination.droppableId) {
      if (startColumn) {
        newTaskIds = reorderList(
          startColumn.taskIds,
          source.index,
          destination.index
        );
      }

      if (newTaskIds) {
        dispatch(
          reorderTasks({ colId: source.droppableId, newTaskIds: newTaskIds })
        );
      }
    } else {
      if (startColumn && finishColumn) {
        newTaskIds = moveTaskToAnotherColumn(
          startColumn.taskIds,
          finishColumn.taskIds,
          source,
          destination
        );

        dispatch(
          moveTask({
            startColId: source.droppableId,
            finishColId: destination.droppableId,
            newStartTaskIds: newTaskIds.sourceClone,
            newFinishTaskIds: newTaskIds.destClone,
          })
        );
      }
    }
  };
  return {
    onDragEndHandler,
  };
};
