import { Divider, VStack } from '@yamada-ui/react';
import PostDetail from '@/pages/components/PostDetail';
import { PostResponse, decodePostResponses } from '@/pages/api/PostResponse';
import { useHomeModal } from './hooks';
import Sidebar from '@/pages/components/Sidebar';
import useSWR from 'swr';

const fetcher = (offset: number, limit: number) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/tweets?offset=${offset}&limit=${limit}`).then((res) => res.json());

export const HomeModal: React.FC = () => {
  const { handleOnTapPost } = useHomeModal();
  const { data, error, isLoading } = useSWR('/tweets', () => fetcher(0, 10));
  const posts = decodePostResponses(data || [])

  return (
    <Sidebar>
      <VStack direction="column" divider={<Divider />} display={"inline-block"}>
        {posts.map((post) => (
          <PostDetail key={post.id} post={post} onClick={() => {
            handleOnTapPost(post.id.toString())
          }} />
        ))}
      </VStack>
    </Sidebar>
  );
};
