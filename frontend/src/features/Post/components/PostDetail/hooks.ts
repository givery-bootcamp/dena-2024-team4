import { getPostFetcher } from '@/features/apis/getPost';
import useSWR from 'swr';

// 自分のユーザーID（仮置き）
const MY_USER_ID = 2;

export const usePost = () => {
  return { myUserId: MY_USER_ID }
};

export const useGetPost = (postId: number) => {
  const { data, error, isLoading } = useSWR(`/tweets/${postId}`, () => getPostFetcher(postId));

  return { data, error, isLoading };
};
