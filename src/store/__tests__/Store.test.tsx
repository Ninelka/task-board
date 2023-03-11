import TaskSlice, {
  initialState,
  addNewTask,
  updateTask,
  reorderTasks,
  moveTask,
  removeTask,
} from '../taskSlice';

describe('TaskSlice', () => {
  test('initialize slice with initialValue', () => {
    const listSliceInit = TaskSlice(initialState, { type: 'unknown' });
    expect(listSliceInit).toBe(initialState);
  });

  test('addNewTask', () => {
    const testData = {
      id: `${new Date().getSeconds()}`,
      title: 'Random title',
      description: 'This is for the test section',
    };

    const afterReducerOperation = TaskSlice(initialState, addNewTask(testData));

    expect(afterReducerOperation.tasks).toStrictEqual([testData]);
    expect(afterReducerOperation.columns.at(0)?.taskIds).toStrictEqual([
      testData.id,
    ]);
  });

  test('updateTask', () => {
    const oldTestData = {
      id: `${new Date().getSeconds()}`,
      title: 'Random title',
      description: 'This is for the test section',
    };

    const newTestData = {
      id: oldTestData.id,
      title: 'New title',
      description: 'This is new text',
    };

    const beforeUpdateOperation = TaskSlice(
      initialState,
      addNewTask(oldTestData)
    );
    const afterUpdateOperation = TaskSlice(
      beforeUpdateOperation,
      updateTask(newTestData)
    );

    expect(beforeUpdateOperation.tasks.at(0)?.title).not.toStrictEqual(
      afterUpdateOperation.tasks.at(0)?.title
    );
    expect(beforeUpdateOperation.tasks.at(0)?.description).not.toStrictEqual(
      afterUpdateOperation.tasks.at(0)?.description
    );
  });

  test('reorderTasks', () => {
    const oldTestData = {
      colId: 'ToDo',
      newTaskIds: ['task-1, task-2', 'task-3'],
    };

    const newPayloadData = {
      colId: 'ToDo',
      newTaskIds: ['task-3', 'task-1, task-2'],
    };

    const beforeReorderOperation = TaskSlice(
      initialState,
      reorderTasks(oldTestData)
    );
    const afterReorderOperation = TaskSlice(
      beforeReorderOperation,
      reorderTasks(newPayloadData)
    );

    expect(beforeReorderOperation.columns[0].taskIds).not.toStrictEqual(
      afterReorderOperation.columns[0].taskIds
    );
  });

  test('moveTask', () => {
    const oldTestData = {
      startColId: 'ToDo',
      finishColId: 'InProgress',
      newStartTaskIds: ['task-1, task-2'],
      newFinishTaskIds: ['task-3'],
    };

    const newTestData = {
      startColId: 'ToDo',
      finishColId: 'Done',
      newStartTaskIds: ['task-2'],
      newFinishTaskIds: ['task-1'],
    };

    const beforeMoveOperation = TaskSlice(initialState, moveTask(oldTestData));
    const afterMoveOperation = TaskSlice(
      beforeMoveOperation,
      moveTask(newTestData)
    );

    expect(beforeMoveOperation.columns[0].taskIds).not.toStrictEqual(
      afterMoveOperation.columns[0].taskIds
    );
  });

  test('removeTask', () => {
    const oldTestData = {
      id: `${new Date().getSeconds()}`,
      title: 'Random title',
      description: 'This is for the test section',
    };

    const beforeRemoveOperation = TaskSlice(
      initialState,
      addNewTask(oldTestData)
    );

    const afterUpdateOperation = TaskSlice(
      beforeRemoveOperation,
      removeTask(oldTestData.id)
    );

    expect(afterUpdateOperation.tasks).toStrictEqual([]);
  });
});
