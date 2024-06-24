import { Divider, VStack } from '@yamada-ui/react';
import { decodePostResponses } from '@/pages/api/PostResponse';
import { useHomeModal } from './hooks';
import useSWR from 'swr';
import Sidebar from '@/features/ layouts/components/Sidebar';
import PostDetail from '@/features/Post/components/PostModel';

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
