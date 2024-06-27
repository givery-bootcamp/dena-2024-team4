import { useDisclosure } from '@yamada-ui/react';
import { useState } from 'react';

export enum Model {
  Edit,
  Delete,
  Report,
}

export const usePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [model, setModel] = useState<Model | null>(null);

  const handleMenuButtonAction = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  // 編集メニューを押した時の処理
  const handleEditMenuButtonAction = (event: React.MouseEvent) => {
    event.stopPropagation();
    setModel(Model.Edit);
    isOpen ? onClose() : onOpen();
  };
  // 削除メニューを押した時の処理
  const handleDeleteMenuButtonAction = (event: React.MouseEvent) => {
    event.stopPropagation();
    setModel(Model.Delete);
    isOpen ? onClose() : onOpen();
  };
  // 報告メニューを押した時の処理
  const handleReportMenuButtonAction = (event: React.MouseEvent) => {
    event.stopPropagation();
    setModel(Model.Report);
    isOpen ? onClose() : onOpen();
  };

  // キャンセルした時の処理（モーダルでキャンセルボタンを押した時）
  const handleCancelButtonAction = (event: React.MouseEvent) => {
    event.stopPropagation();
    onClose();
    setModel(null);
  };
  // 編集を確定した時の処理（モーダルで更新ボタンを押した時）
  const handleEditButtonAction = (event: React.MouseEvent) => {
    event.stopPropagation();
    setModel(null);
  };
  // 削除を確定した時の処理（モーダルで削除ボタンを押した時）
  const handleDeleteButtonAction = (event: React.MouseEvent) => {
    event.stopPropagation();
    setModel(null);
  };
  // 報告を確定した時の処理（モーダルで報告ボタンを押した時）
  const handleReportButtonAction = (event: React.MouseEvent) => {
    event.stopPropagation();
    setModel(null);
  };

  return {
    isOpen,
    model,
    handleMenuButtonAction,
    handleEditMenuButtonAction,
    handleDeleteMenuButtonAction,
    handleReportMenuButtonAction,
    handleCancelButtonAction,
    handleEditButtonAction,
    handleDeleteButtonAction,
    handleReportButtonAction,
  };
};
