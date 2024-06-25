import { getPostFetcher } from '@/features/apis/getPost';
import useSWR from 'swr';

export const usePost = () => {
  // 自分のユーザーID（仮置き）
  const MY_USER_ID = 2;

  return { MY_USER_ID };
};

export const useGetPost = (postId: number) => {
  const { data, error, isLoading } = useSWR('/tweets/:tweetId"', () => getPostFetcher(postId));

  return { data, error, isLoading };
};
