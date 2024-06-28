import { PostResponse } from '@/pages/api/PostResponse';
import { Flex } from '@yamada-ui/react';
import { usePostCard } from './hooks';
import Post from '../Post';

type PostCardProps = {
  post: PostResponse
  onClick: () => void
}

export default function PostCard({ post, onClick }: PostCardProps) {
  const { myUserId, mutate } = usePostCard();

  return (
    <Flex direction="column" padding="md" onClick={onClick}>
      <Post myUserId={myUserId} post={post} updateSuccess={() => {
        mutate("/tweets")
      }} />
    </Flex>
  );
}
