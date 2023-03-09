import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import styles from './Layout.module.css';
import Column from './Column/Column';
import { ITask } from '../types';
import { useAppSelector } from '../store';
import { useDrag } from '../hooks/useDrag';

const Layout = () => {
  const { tasks, columns, columnOrder } = useAppSelector(
    (state) => state.tasks
  );

  const { onDragEndHandler } = useDrag();

  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      <main className={styles.container}>
        {columnOrder.map((columnId) => {
          const column = columns.find((item) => item.id === columnId);

          const tasksList = column?.taskIds.map((taskId) =>
            tasks.find((task) => taskId === task.id)
          );

          if (column) {
            return (
              <Column
                key={column.id}
                id={column.id}
                title={column.title}
                items={tasksList as ITask[]}
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
