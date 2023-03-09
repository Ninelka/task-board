import React from 'react';
import Modal, { IModalProps } from './Modal';
import styles from './Modal.module.css';
import Button from '../Button/Button';

const ConfirmationModal: React.FC<IModalProps> = ({
  isOpen,
  title,
  children,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} title={title} onClose={onClose}>
      <div className={styles.body}>{children}</div>
      <div className={styles.footer}>
        <Button className="btn btn-primary">Ok</Button>
        <Button className="btn btn-secondary" onClick={onClose}>
          Отмена
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
