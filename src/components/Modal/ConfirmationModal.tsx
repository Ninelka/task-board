import React from 'react';
import Modal, { IModalProps } from './Modal';
import styles from './Modal.module.css';
import Button from '../Button/Button';

interface ConfirmationModalType extends Omit<IModalProps, 'children'> {
  onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalType> = ({
  isOpen,
  title,
  onConfirm,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} title={title} onClose={onClose}>
      <div className={styles.footer}>
        <Button className="btn btn-primary" onClick={onConfirm}>
          Ok
        </Button>
        <Button className="btn btn-secondary" onClick={onClose}>
          Отмена
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
