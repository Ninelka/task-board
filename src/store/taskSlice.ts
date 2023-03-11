import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IColumn, ITask, MoveTaskAction, ReorderTaskAction } from '../types';

interface TaskState {
  tasks: ITask[];
  columns: IColumn[];
  columnOrder: string[];
}

export const initialState: TaskState = {
  tasks: [],
  columns: [
    {
      id: 'ToDo',
      title: 'Нужно',
      taskIds: [],
    },
    {
      id: 'InProgress',
      title: 'В работе',
      taskIds: [],
    },
    {
      id: 'Done',
      title: 'Выполнено',
      taskIds: [],
    },
  ],

  columnOrder: ['ToDo', 'InProgress', 'Done'],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addNewTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload);
      state.columns[0].taskIds.push(action.payload.id);
    },
    updateTask: (state, action: PayloadAction<ITask>) => {
      const targetTask = state.tasks.findIndex(
        (item) => item.id === action.payload.id
      );

      state.tasks[targetTask] = action.payload;
    },
    reorderTasks: (state, action: PayloadAction<ReorderTaskAction>) => {
      const targetCol = state.columns.find(
        (item) => item.id === action.payload.colId
      );
      if (targetCol) {
        targetCol.taskIds = action.payload.newTaskIds;
      }
    },
    moveTask: (state, action: PayloadAction<MoveTaskAction>) => {
      const startCol = state.columns.find(
        (item) => item.id === action.payload.startColId
      );

      const finishCol = state.columns.find(
        (item) => item.id === action.payload.finishColId
      );

      if (startCol && finishCol) {
        startCol.taskIds = action.payload.newStartTaskIds;
        finishCol.taskIds = action.payload.newFinishTaskIds;
      }
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);

      state.columns[0].taskIds = state.columns[0].taskIds.filter(
        (item) => item !== action.payload
      );
    },
  },
});

export const { addNewTask, updateTask, reorderTasks, moveTask, removeTask } =
  taskSlice.actions;
export default taskSlice.reducer;
