import { useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const openConfirmationModalHandler = () => {
    setIsConfirmationModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  const closeConfirmationModalHandler = () => {
    setIsConfirmationModalOpen(false);
  };

  return {
    isModalOpen,
    openModalHandler,
    closeModalHandler,
    isConfirmationModalOpen,
    openConfirmationModalHandler,
    closeConfirmationModalHandler,
  };
};
