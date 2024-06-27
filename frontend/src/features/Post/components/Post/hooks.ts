import { useDisclosure } from '@yamada-ui/react';
import { useState } from 'react';

export const usePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleMenuButtonAction = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  // 編集メニューを押した時の処理
  const handleEditMenuButtonAction = (event: React.MouseEvent) => {
    event.stopPropagation();
    isOpen ? onClose() : onOpen();
  };
  // 削除メニューを押した時の処理
  const handleDeleteMenuButtonAction = (event: React.MouseEvent) => {
    event.stopPropagation();
    isOpen ? onClose() : onOpen();
  };
  // 報告メニューを押した時の処理
  const handleReportMenuButtonAction = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  // キャンセルした時の処理（モーダルでキャンセルボタンを押した時）
  const handleCancelButtonAction = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  // 編集を確定した時の処理（モーダルで更新ボタンを押した時）
  const handleEditButtonAction = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  // 削除を確定した時の処理（モーダルで削除ボタンを押した時）
  const handleDeleteButtonAction = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return {
    isOpen,
    onClose,
    handleMenuButtonAction,
    handleEditMenuButtonAction,
    handleDeleteMenuButtonAction,
    handleReportMenuButtonAction,
    handleCancelButtonAction,
    handleEditButtonAction,
    handleDeleteButtonAction,
  };
};
