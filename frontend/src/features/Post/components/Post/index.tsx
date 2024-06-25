import { PostResponse } from '@/pages/api/PostResponse';
import { timeAgo } from '@/utils/date';
import { Flex, Text, Spacer, Icon, Menu, MenuButton, MenuItem, MenuList, IconButton } from '@yamada-ui/react';
import { FaEllipsis } from "react-icons/fa6";
import { FaRegFlag } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";

type PostProps = {
  myUserId: number
  post: PostResponse
}

export default function Post({ myUserId, post }: PostProps) {
  return (
    <>
      <Flex direction="row">
        <Text paddingEnd={'sm'}>{'unknown'}</Text>
        <Text color="gray">@{post.user_id}・{timeAgo(new Date(post.created_at))}</Text>
        <Spacer />
        <Menu>
          <MenuButton as={IconButton} variant="link" icon={<Icon as={FaEllipsis} />} onClick={(e) => {
            e.stopPropagation();
          }} />
          <MenuList>
            {(myUserId === post.user_id && (
              <MenuItem
                color="red"
                icon={<Icon as={RiDeleteBinLine} color="red" />}
                onClick={() => console.log('投稿を削除')}
              >
                投稿を削除
              </MenuItem>
            )) || (
                <MenuItem icon={<Icon as={FaRegFlag} />} onClick={() => console.log('投稿を報告')}>
                  投稿を報告
                </MenuItem>
              )}
          </MenuList>
        </Menu>
      </Flex>
      <Text as="b" fontSize="md">
        {post.title}
      </Text>
      <Text fontSize="md">{post.body}</Text>
    </>
  );
}