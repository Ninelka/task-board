import React from 'react';
import styles from './TaskList.module.css';
import { DroppableProvided } from 'react-beautiful-dnd';

interface ITaskList {
  innerRef: (element: HTMLElement | null) => void;
  provided: DroppableProvided;
  children: React.ReactNode;
}

const TaskList: React.FC<ITaskList> = ({ ...props }) => {
  const { innerRef, children } = props;

  return (
    <div className={styles.container} ref={innerRef}>
      {children}
    </div>
  );
};

export default TaskList;
