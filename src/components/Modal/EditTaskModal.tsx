import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { v4 as uuidv4 } from 'uuid';
import Modal, { IModalProps } from './Modal';
import styles from './Modal.module.css';
import Button from '../Button/Button';
import TaskForm from '../TaskForm/TaskForm';
import { addNewTask, useAppDispatch } from '../../store';
import { schema, FormData } from '../../lib/form-validation';

type EditTaskModalType = Omit<IModalProps, 'children'>;

const EditTaskModal: React.FC<EditTaskModalType> = ({
  isOpen,
  title,
  onClose,
}) => {
  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const dispatch = useAppDispatch();

  const onSubmit = (data: FormData) => {
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
  };

  return (
    <Modal isOpen={isOpen} title={title} onClose={onClose}>
      <FormProvider {...methods}>
        <div className={styles.body}>
          <TaskForm />
        </div>
        <div className={styles.footer}>
          <Button
            type="submit"
            className="btn btn-primary"
            onClick={methods.handleSubmit(onSubmit)}
          >
            Сохранить
          </Button>
          <Button className="btn btn-secondary" onClick={onClose}>
            Закрыть
          </Button>
        </div>
      </FormProvider>
    </Modal>
  );
};

export default EditTaskModal;
