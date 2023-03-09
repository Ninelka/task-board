import Portal from '../Portal';
import React from 'react';
import styles from './Modal.module.css';
import Button from '../Button/Button';

export interface IModalProps {
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ isOpen, onClose, title, children }) => {
  return (
    <Portal id="portal" isShow={isOpen}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.header}>
              {title && <h5 className="modal-title">{title}</h5>}
              <Button
                className="btn-close"
                aria-label="Закрыть"
                onClick={onClose}
              ></Button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
