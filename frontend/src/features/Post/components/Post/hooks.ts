import { updatePost } from '@/features/apis/updatePost';
import { PostResponse } from '@/pages/api/PostResponse';
import { m, useDisclosure } from '@yamada-ui/react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export enum Model {
  Edit,
  Delete,
  Report,
}

export const usePost = (post: PostResponse) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [model, setModel] = useState<Model | null>(null);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  useEffect(() => {
    setTitle(post.title);
    setBody(post.body);
  }, [post]);

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
  const handleEditButtonAction = async (event: React.MouseEvent, updateSuccess: () => void) => {
    event.stopPropagation();
    const response = await updatePost(post.id, { title: title, body: body });
    if (!response.ok) return toast.error('更新に失敗しました');
    updateSuccess();
    onClose();
    setModel(null);
  };
  // 削除を確定した時の処理（モーダルで削除ボタンを押した時）
  const handleDeleteButtonAction = (event: React.MouseEvent) => {
    event.stopPropagation();
    // ~~~~~~
    // ここに削除処理
    // ~~~~~~
    onClose();
    setModel(null);
  };
  // 報告を確定した時の処理（モーダルで報告ボタンを押した時）
  const handleReportButtonAction = (event: React.MouseEvent) => {
    event.stopPropagation();
    // ~~~~~~
    // ここに報告処理
    // ~~~~~~
    onClose();
    setModel(null);
  };

  const handleOnChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleOnChangeBody = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
  };

  return {
    isOpen,
    model,
    title,
    body,
    handleMenuButtonAction,
    handleEditMenuButtonAction,
    handleDeleteMenuButtonAction,
    handleReportMenuButtonAction,
    handleCancelButtonAction,
    handleEditButtonAction,
    handleDeleteButtonAction,
    handleReportButtonAction,
    handleOnChangeTitle,
    handleOnChangeBody,
  };
};
