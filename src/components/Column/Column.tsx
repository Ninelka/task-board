import React from 'react';
import styles from './Column.module.css';
import TaskList from '../TaskList/TaskList';
import { ITaskItem } from '../TaskItem/TaskItem';
import Button from '../Button/Button';

interface IColumn {
  title: string;
  items?: ITaskItem[];
  withNewTaskButton?: boolean;
}

const Column: React.FC<IColumn> = ({ title, items, withNewTaskButton }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {items && <TaskList items={items} />}
      {withNewTaskButton && (
        <Button iconLeft="bi bi-plus" className="btn btn-primary mt-2">
          Создать задачу
        </Button>
      )}
    </section>
  );
};

export default Column;
