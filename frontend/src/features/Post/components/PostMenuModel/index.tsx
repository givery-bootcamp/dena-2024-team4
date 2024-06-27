import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "@yamada-ui/react";
import { PropsWithChildren } from "react";

interface Props {
  isOpen: boolean;
  onClose?: () => void;
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
}

export const PostMenuModel: React.FC<Props> = ({ isOpen, onClose, header, body, footer }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalHeader>{header}</ModalHeader>
      <ModalBody>{body}</ModalBody>
      <ModalFooter>{footer}</ModalFooter>
    </Modal>
  );
};
