import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styles from './Column.module.css';
import { IColumn, ITask } from '../../types';
import { Button, EditTaskModal, TaskItem, TaskList } from '../../components';
import { useModal } from '../../hooks/useModal';

interface IColumnItem extends Omit<IColumn, 'taskIds'> {
  id: string;
  title: string;
  items?: ITask[];
  withNewTaskButton?: boolean;
}

const Column: React.FC<IColumnItem> = ({
  id,
  title,
  items,
  withNewTaskButton,
}) => {
  const { isModalOpen, openModalHandler, closeModalHandler } = useModal();

  return (
    <section className={styles.container + ' bg-light'} data-testid="column">
      <h4 className={styles.title}>{title}</h4>
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
                colId={id}
              />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
      {withNewTaskButton && (
        <>
          <Button
            iconLeft="bi bi-plus"
            className="btn btn-dark mt-2"
            onClick={openModalHandler}
          >
            Создать задачу
          </Button>
          <EditTaskModal
            isOpen={isModalOpen}
            onClose={closeModalHandler}
            title="Новая задача"
          />
        </>
      )}
    </section>
  );
};

export default Column;
