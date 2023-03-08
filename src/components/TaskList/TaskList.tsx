import React from 'react';
import TaskItem, { ITaskItem } from '../TaskItem/TaskItem';
import styles from './TaskList.module.css';

interface ITaskList {
  items: ITaskItem[];
}

const TaskList: React.FC<ITaskList> = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <TaskItem
          key={item.id}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default TaskList;
