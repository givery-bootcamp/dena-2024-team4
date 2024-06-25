import { Divider, VStack } from '@yamada-ui/react';
import { decodePostResponses } from '@/pages/api/PostResponse';
import { useGetPosts, useHome } from './hooks';
import PostCard from '@/features/Post/components/PostCard';

export const Home: React.FC = () => {
  const { handleOnTapPost } = useHome();
  const { data, error, isLoading } = useGetPosts(0, 10);
  const posts = decodePostResponses(data || [])

  return (
    <VStack direction="column" divider={<Divider />} display={"inline-block"}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onClick={() => {
          handleOnTapPost(post.id.toString())
        }} />
      ))}
    </VStack>
  );
};
