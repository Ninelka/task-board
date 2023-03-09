import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import styles from './TaskForm.module.css';

const TaskForm = () => {
  const {
    reset,
    register,
    formState: { errors },
  } = useFormContext();

  React.useEffect(() => {
    reset();
  }, [reset]);

  return (
    <form>
      <div className={styles.row}>
        <label htmlFor="task-title">Название</label>
        <input id="task-title" type="text" {...register('title')} />
        <ErrorMessage
          errors={errors}
          name="title"
          render={() => (
            <span className="text-danger">Введите название задачи</span>
          )}
        />
      </div>
      <div className={styles.row}>
        <label htmlFor="task-description">Описание</label>
        <textarea id="task-description" rows={3} {...register('description')} />
        <ErrorMessage
          errors={errors}
          name="description"
          render={() => (
            <span className="text-danger">Введите описание задачи</span>
          )}
        />
      </div>
    </form>
  );
};

export default TaskForm;
