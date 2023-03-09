import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IColumn, ITask } from '../types';

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
  },
});

export const { addNewTask } = taskSlice.actions;
export default taskSlice.reducer;
