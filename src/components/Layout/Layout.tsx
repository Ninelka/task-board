import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import styles from './Layout.module.css';
import Column from '../Column/Column';
import initialData from '../../initial-data';
import { ITask } from '../../types';

const Layout = () => {
  const onDragEndHandler = (result) => {};

  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      <main className={styles.container}>
        {initialData.columnOrder.map((columnId) => {
          const column = initialData.columns.find(
            (item) => item.id === columnId
          );

          const tasks = column?.taskIds.map((taskId) =>
            initialData.tasks.find((task) => taskId === task.id)
          );

          console.log('column: ', column);
          console.log('tasks: ', tasks);

          if (column) {
            return (
              <Column
                key={column.id}
                id={column.id}
                title={column.title}
                items={tasks as ITask[]}
                withNewTaskButton={columnId === 'ToDo'}
              />
            );
          }
        })}
      </main>
    </DragDropContext>
  );
};

export default Layout;
