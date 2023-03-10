import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { v4 as uuidv4 } from 'uuid';
import Modal, { IModalProps } from './Modal';
import styles from './Modal.module.css';
import Button from '../Button/Button';
import TaskForm from '../TaskForm/TaskForm';
import {
  addNewTask,
  updateTask,
  useAppDispatch,
  useAppSelector,
} from '../../store';
import { schema, FormData } from '../../lib';
import ConfirmationModal from './ConfirmationModal';
import { useModal } from '../../hooks/useModal';

interface EditTaskModalType extends Omit<IModalProps, 'children'> {
  taskId?: string;
  withConfirmation?: boolean;
}

const EditTaskModal: React.FC<EditTaskModalType> = ({
  taskId,
  isOpen,
  title,
  withConfirmation,
  onClose,
}) => {
  const {
    isConfirmationModalOpen,
    openConfirmationModalHandler,
    closeConfirmationModalHandler,
  } = useModal();
  const { tasks } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  const currentTask = tasks.find((task) => task.id === taskId);

  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      id: currentTask?.id || '',
      title: currentTask?.title || '',
      description: currentTask?.description || '',
    },
  });

  const onEdit = (data: FormData) => {
    closeConfirmationModalHandler();

    dispatch(
      updateTask({
        id: data.id!,
        title: data.title,
        description: data.description,
      })
    );

    if (onClose) {
      onClose();
    }
  };

  const onSubmit = (data: FormData) => {
    if (withConfirmation) {
      openConfirmationModalHandler();
    } else {
      dispatch(
        addNewTask({
          id: uuidv4(),
          title: data.title,
          description: data.description,
        })
      );

      if (onClose) {
        onClose();
      }
    }
  };

  useEffect(() => {
    methods.reset(currentTask);
  }, [currentTask]);

  return (
    <Modal isOpen={isOpen} title={title} onClose={onClose}>
      <FormProvider {...methods}>
        <div className={styles.body}>
          <TaskForm />
        </div>
        <div className={styles.footer}>
          <Button
            isDisabled={!methods.formState.isDirty}
            type="submit"
            className="btn btn-primary"
            onClick={methods.handleSubmit(onSubmit)}
          >
            Сохранить
          </Button>
          {withConfirmation && (
            <ConfirmationModal
              onConfirm={methods.handleSubmit(onEdit)}
              isOpen={isConfirmationModalOpen}
              title="Сохранить изменения?"
              onClose={closeConfirmationModalHandler}
            />
          )}
          <Button className="btn btn-secondary" onClick={onClose}>
            Закрыть
          </Button>
        </div>
      </FormProvider>
    </Modal>
  );
};

export default EditTaskModal;
