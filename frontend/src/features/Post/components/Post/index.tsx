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
  Input,
  Button,
  Textarea,
} from '@yamada-ui/react';
import { FaEllipsis } from 'react-icons/fa6';
import { FaRegFlag } from 'react-icons/fa6';
import { RiDeleteBinLine, RiEditLine } from 'react-icons/ri';
import { Model, usePost } from './hooks';
import { PostMenuModel } from '../PostMenuModel';

type PostProps = {
  myUserId: number;
  post: PostResponse;
};

export default function Post({ myUserId, post }: PostProps) {
  const {
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
  } = usePost(post);

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

        <PostMenuModel isOpen={isOpen} header={
          model === Model.Edit && <Input placeholder="basic" value={title} onClick={(event) => event.stopPropagation()} onChange={handleOnChangeTitle} /> ||
          model === Model.Delete && <Text>投稿を削除</Text> ||
          model === Model.Report && <Text>投稿を報告</Text>
        } body={
          model === Model.Edit && <Textarea variant="outline" placeholder="outline" value={body} onClick={(event) => event.stopPropagation()} onChange={handleOnChangeBody} /> ||
          model === Model.Delete && <Text>この投稿を削除しますか？</Text> ||
          model === Model.Report && <Text>この投稿を報告しますか？</Text>
        } footer={
          <>
            <Button variant="outline" colorScheme="primary" onClick={handleCancelButtonAction}>キャンセル</Button>
            {
              model === Model.Edit && <Button colorScheme="primary" onClick={handleEditButtonAction} isDisabled={title === "" || body === ""}>編集</Button> ||
              model === Model.Delete && <Button colorScheme="red" onClick={handleDeleteButtonAction}>削除</Button> ||
              model === Model.Report && <Button colorScheme="primary" onClick={handleReportButtonAction}>報告</Button>
            }
          </>
        } />
      </Flex>
      <Text as="b" fontSize="md">
        {post.title}
      </Text>
      <Text fontSize="md">{post.body}</Text>
    </>
  );
}
