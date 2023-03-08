import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styles from './Column.module.css';
import TaskList from '../TaskList/TaskList';
import TaskItem, { ITask } from '../TaskItem/TaskItem';
import Button from '../Button/Button';

interface IColumn {
  id: string;
  title: string;
  items?: ITask[];
  withNewTaskButton?: boolean;
}

const Column: React.FC<IColumn> = ({ id, title, items, withNewTaskButton }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <Droppable droppableId={id} type="task">
        {(provided) => (
          <TaskList provided={provided} innerRef={provided.innerRef}>
            {items?.map((item, index) => (
              <TaskItem
                key={item.id}
                index={index}
                id={item.id}
                title={item.title}
                description={item.description}
              />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
      {withNewTaskButton && (
        <Button iconLeft="bi bi-plus" className="btn btn-primary mt-2">
          Создать задачу
        </Button>
      )}
    </section>
  );
};

export default Column;
