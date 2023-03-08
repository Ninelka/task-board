import React from 'react';
import styles from './Column.module.css';
import TaskList from '../TaskList/TaskList';
import { ITaskItem } from '../TaskItem/TaskItem';

interface IColumn {
  title: string;
  items?: ITaskItem[];
}

const Column: React.FC<IColumn> = ({ title, items }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {items && <TaskList items={items} />}
    </section>
  );
};

export default Column;
