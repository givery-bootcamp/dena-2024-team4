import { PostResponse } from '@/pages/api/PostResponse';
import { timeAgo } from '@/utils/date';
import {
  Flex,
  Text,
  Spacer,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from '@yamada-ui/react';
import { FaEllipsis } from 'react-icons/fa6';
import { FaRegFlag } from 'react-icons/fa6';
import { RiDeleteBinLine, RiEditLine } from 'react-icons/ri';
import { usePost } from './hooks';

type PostProps = {
  myUserId: number;
  post: PostResponse;
};

export default function Post({ myUserId, post }: PostProps) {
  const {
    isOpen,
    onClose,
    handleMenuButtonAction,
    handleEditMenuButtonAction,
    handleDeleteMenuButtonAction,
    handleReportMenuButtonAction,
    handleCancelButtonAction,
    handleEditButtonAction,
    handleDeleteButtonAction,
  } = usePost();

  return (
    <>
      <Flex direction="row">
        <Text paddingEnd={'sm'}>{'unknown'}</Text>
        <Text color="gray">
          @{post.user_id}・{timeAgo(new Date(post.created_at))}
        </Text>
        <Spacer />
        <Menu>
          <MenuButton
            as={IconButton}
            variant="link"
            icon={<Icon as={FaEllipsis} />}
            onClick={handleMenuButtonAction}
          />
          <MenuList>
            {myUserId === post.user_id ? (
              <>
                <MenuItem icon={<Icon as={RiEditLine} />} onClick={handleEditMenuButtonAction}>
                  投稿を編集
                </MenuItem>
                <MenuItem color="red" icon={<Icon as={RiDeleteBinLine} color="red" />} onClick={handleDeleteMenuButtonAction}>
                  投稿を削除
                </MenuItem>
              </>
            ) : (
              <MenuItem icon={<Icon as={FaRegFlag} />} onClick={handleReportMenuButtonAction}>
                投稿を報告
              </MenuItem>
            )}
          </MenuList>
        </Menu>
        <Modal isOpen={isOpen} onClose={onClose} size="md">
          <ModalHeader>投稿を削除</ModalHeader>
          <ModalBody>この投稿を削除しますか？</ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              colorScheme="primary"
              onClick={handleCancelButtonAction}
            >
              キャンセル
            </Button>
            <Button
              variant="solid"
              colorScheme="red"
              onClick={handleDeleteButtonAction}
            >
              削除
            </Button>
          </ModalFooter>
        </Modal>
      </Flex>
      <Text as="b" fontSize="md">
        {post.title}
      </Text>
      <Text fontSize="md">{post.body}</Text>
    </>
  );
}
