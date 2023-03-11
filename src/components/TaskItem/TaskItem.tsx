import React from 'react';
import styles from './TaskItem.module.css';
import { Draggable } from 'react-beautiful-dnd';
import { ITask } from '../../types';
import Button from '../Button/Button';
import { EditTaskModal } from '../index';
import ConfirmationModal from '../Modal/ConfirmationModal';
import { useModal } from '../../hooks/useModal';
import { removeTask, useAppDispatch } from '../../store';

interface ITaskItem extends Omit<ITask, 'index'> {
  id: string;
  title: string;
  description: string;
  index: number;
  colId?: string;
}

const TaskItem: React.FC<ITaskItem> = ({
  id,
  index,
  title,
  description,
  colId,
}) => {
  const {
    isModalOpen,
    isConfirmationModalOpen,
    openModalHandler,
    closeModalHandler,
    openConfirmationModalHandler,
    closeConfirmationModalHandler,
  } = useModal();
  const dispatch = useAppDispatch();
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={styles.container}
        >
          <header className={styles.header}>
            <h5 className="m-0 text-truncate">{title}</h5>
            {colId === 'ToDo' && (
              <span className={styles.editBtn}>
                <Button
                  className="btn btn-sm"
                  aria-label="Редактировать"
                  onClick={openModalHandler}
                >
                  <i className="bi bi-pencil-square" />
                </Button>
                <EditTaskModal
                  taskId={id}
                  isOpen={isModalOpen}
                  withConfirmation={true}
                  onClose={closeModalHandler}
                  title="Редактирование задачи"
                />
              </span>
            )}
          </header>
          <p className={styles.description}>{description}</p>
          {colId === 'ToDo' && (
            <span className={styles.removeBtn}>
              <Button
                className="btn btn-sm"
                aria-label="Удалить"
                onClick={openConfirmationModalHandler}
              >
                <i className="bi bi-trash text-danger" />
              </Button>
              <ConfirmationModal
                isOpen={isConfirmationModalOpen}
                onConfirm={() => {
                  dispatch(removeTask(id));
                  closeConfirmationModalHandler();
                }}
                onClose={closeConfirmationModalHandler}
                title="Удалить данную задачу?"
              />
            </span>
          )}
        </div>
      )}
    </Draggable>
  );
};

export default TaskItem;
