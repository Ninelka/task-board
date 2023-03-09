import React from 'react';
import styles from './TaskForm.module.css';

const TaskForm = () => {
  return (
    <>
      <div className={styles.row}>
        <label htmlFor="task-title">Название задачи</label>
        <input id="task-title" type="text" />
      </div>
      <div className={styles.row}>
        <label htmlFor="task-description">Описание задачи</label>
        <textarea id="task-description" rows={3} />
      </div>
    </>
  );
};

export default TaskForm;
