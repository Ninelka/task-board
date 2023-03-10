import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IColumn,
  ITask,
  MoveTaskAction,
  RemoveTaskAction,
  ReorderTaskAction,
} from '../types';

interface TaskState {
  tasks: ITask[];
  columns: IColumn[];
  columnOrder: string[];
}

const initialState: TaskState = {
  tasks: [
    {
      id: 'task-1',
      title: 'Take out the garbage',
      description: 'Some random description',
    },
    {
      id: 'task-2',
      title: 'Watch my favorite show',
      description: 'Some random description',
    },
    {
      id: 'task-3',
      title: 'Charge my phone',
      description: 'Some random description',
    },
    {
      id: 'task-4',
      title: 'Cook dinner',
      description: 'Some random description',
    },
  ],
  columns: [
    {
      id: 'ToDo',
      title: 'Нужно',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
      // taskIds: [],
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
    removeTask: (state, action: PayloadAction<RemoveTaskAction>) => {
      state.tasks = state.tasks.filter(
        (item) => item.id !== action.payload.taskId
      );
      const targetCol = state.columns.find(
        (item) => item.id === action.payload.colId
      );

      const newTaskIds = targetCol?.taskIds.filter(
        (item) => item !== action.payload.taskId
      );
      if (targetCol && newTaskIds) {
        targetCol.taskIds = newTaskIds;
      }
    },
  },
});

export const { addNewTask, updateTask, reorderTasks, moveTask, removeTask } =
  taskSlice.actions;
export default taskSlice.reducer;
