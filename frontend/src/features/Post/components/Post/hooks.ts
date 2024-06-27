import { useDisclosure } from '@yamada-ui/react';
import { useState } from 'react';

export const usePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleMenuButtonAction = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  // 編集時の処理
  const handleEditAction = (event: React.MouseEvent) => {
    event.stopPropagation();
    isOpen ? onClose() : onOpen();
  };
  // 削除時の処理
  const handleDeleteAction = (event: React.MouseEvent) => {
    event.stopPropagation();
    isOpen ? onClose() : onOpen();
  };
  // 報告時の処理
  const handleReportAction = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return {
    isOpen,
    onClose,
    handleMenuButtonAction,
    handleEditAction,
    handleDeleteAction,
    handleReportAction,
  };
};
