import React from 'react';
import styles from './TaskItem.module.css';

export interface ITaskItem {
  title: string;
  description: string;
  id?: string;
}

const TaskItem: React.FC<ITaskItem> = ({ title, description }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default TaskItem;
