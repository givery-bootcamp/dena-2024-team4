import { Button, Modal, useDisclosure } from '@yamada-ui/react';
import PostForm from './PostForm';

const PostModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <PostForm />
      </Modal>
    </div>
  );
};

export default PostModal;
