const initialData = {
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

export default initialData;
