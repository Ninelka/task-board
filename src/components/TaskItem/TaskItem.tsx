import React from 'react';
import styles from './TaskItem.module.css';
import { Draggable } from 'react-beautiful-dnd';
import { ITask } from '../../types';

interface ITaskItem extends Omit<ITask, 'index'> {
  id: string;
  title: string;
  description: string;
  index: number;
}

const TaskItem: React.FC<ITaskItem> = ({ id, index, title, description }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={styles.container}
        >
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      )}
    </Draggable>
  );
};

export default TaskItem;
