import { decodePostResponse } from '@/pages/api/PostResponse';
import { Flex } from '@yamada-ui/react';
import { useGetPost, usePost } from './hooks';
import Post from '../Post';

type PostDetailProps = {
  postId: string
}

export default function PostDetailModel({ postId }: PostDetailProps) {
  const { MY_USER_ID } = usePost();
  const { data, error, isLoading } = useGetPost(Number(postId));
  const post = decodePostResponse(data || {})

  return (
    <Flex direction="column" padding="md">
      <Post MY_USER_ID={MY_USER_ID} post={post} />
    </Flex>
  );
}
