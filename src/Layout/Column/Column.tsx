import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styles from './Column.module.css';
import { IColumn, ITask } from '../../types';
import { Button, EditTaskModal, TaskItem, TaskList } from '../../components';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
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
            className="btn btn-primary mt-2"
            onClick={() => setIsModalOpen((prevState) => !prevState)}
          >
            Создать задачу
          </Button>
          <EditTaskModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Новая задача"
          />
        </>
      )}
    </section>
  );
};

export default Column;
