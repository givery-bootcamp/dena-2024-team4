import { Flex, Text, Spacer, Icon, Menu, MenuButton, MenuItem, MenuList, IconButton } from '@yamada-ui/react';
import { FaEllipsis } from "react-icons/fa6";
import { FaRegFlag } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";

// 自分のユーザーID（仮置き）
const MY_USER_ID = 2

// apiのレスポンスの型（仮置き）
type Post = {
  id: number
  user_id: number
  title: string
  body: string
  created_at: string
  updated_at: string
  deleted_at: null
  user: {
    id: number
    name: string
    password: string
    created_at: string
    updated_at: string
    deleted_at: null
  }
}

type PostDetailProps = {
  post: Post
}

export default function PostDetail({ post }: PostDetailProps) {
  function timeAgo(date: Date): string {
    const now = new Date();
    const secondsPast = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (secondsPast < 60) {
      return `${secondsPast}秒前`;
    }
    if (secondsPast < 3600) {
      const minutesPast = Math.floor(secondsPast / 60);
      return `${minutesPast}分前`;
    }
    if (secondsPast < 86400) {
      const hoursPast = Math.floor(secondsPast / 3600);
      return `${hoursPast}時間前`;
    }
    if (secondsPast < 2592000) { // 1ヶ月を30日とする
      const daysPast = Math.floor(secondsPast / 86400);
      return `${daysPast}日前`;
    }
    if (secondsPast < 31536000) { // 1年を365日とする
      const monthsPast = Math.floor(secondsPast / 2592000);
      return `${monthsPast}ヶ月前`;
    }
    const yearsPast = Math.floor(secondsPast / 31536000);
    return `${yearsPast}年前`;
  }

  return (
    <Flex direction="column" padding="md">
      <Flex direction="row">
        <Text paddingEnd={"sm"}>{post.user.name}</Text>
        <Text color="gray">@{post.user.id}</Text>
        <Text color="gray">・</Text>
        <Text color="gray">{timeAgo(new Date(post.created_at))}</Text>
        <Spacer />
        <Menu>
          <MenuButton as={IconButton} variant="link" icon={<Icon as={FaEllipsis} />} />
          <MenuList>
            {MY_USER_ID === post.user.id &&
              <MenuItem color="red" icon={<Icon as={RiDeleteBinLine} color="red" />} onClick={() => console.log("投稿を削除")}>投稿を削除</MenuItem> ||
              <MenuItem icon={<Icon as={FaRegFlag} />} onClick={() => console.log("投稿を報告")}>投稿を報告</MenuItem>
            }
          </MenuList>
        </Menu>
      </Flex>
      <Text as="b" fontSize="md">{post.title}</Text>
      <Text fontSize="md">{post.body}</Text>
    </Flex>
  )
}
