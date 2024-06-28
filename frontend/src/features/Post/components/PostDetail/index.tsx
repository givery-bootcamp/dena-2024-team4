import { decodePostResponse } from '@/pages/api/PostResponse';
import { Flex } from '@yamada-ui/react';
import { usePostDetail } from './hooks';
import Post from '../Post';

type PostDetailProps = {
  postId: string
}

export default function PostDetail({ postId }: PostDetailProps) {
  const { myUserId, data, error, isLoading, mutate } = usePostDetail(Number(postId));
  const post = decodePostResponse(data || {})

  return (
    <Flex direction="column" padding="md">
      <Post myUserId={myUserId} post={post} updateSuccess={() => {
        mutate(`/tweets/${postId}`)
      }} />
    </Flex>
  );
}
