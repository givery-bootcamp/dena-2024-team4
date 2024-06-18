import { Modal, ModalBody, ModalHeader } from '@yamada-ui/react';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  onClose?: () => void;
  title: string;
}

export const AuthModal: React.FC<Props> = ({ onClose, title, children }) => {
  return (
    <Modal
      isOpen
      maxW="2xl"
      minW={{ base: 'auto', md: '100dvw' }}
      minH={{ base: 'auto', md: '100dvh' }}
      animation="none"
      onClose={onClose}
      rounded={{ base: '2xl', md: 'none' }}
    >
      <ModalHeader>
        <p>{title}</p>
      </ModalHeader>
      <ModalBody
        display="flex"
        flexDirection="column"
        m="auto"
        p="lg"
        w="full"
        maxH={{ md: 300 }}
        maxW={400}
      >
        {children}
      </ModalBody>
    </Modal>
  );
};
