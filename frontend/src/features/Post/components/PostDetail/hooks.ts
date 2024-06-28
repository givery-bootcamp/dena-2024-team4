import { getPostFetcher } from '@/features/apis/getPost';
import useSWR, { useSWRConfig } from 'swr';

// 自分のユーザーID（仮置き）
const MY_USER_ID = 2;

export const usePostDetail = (postId: number) => {
  const { mutate } = useSWRConfig();
  const { data, error, isLoading } = useSWR(`/tweets/${postId}`, () => getPostFetcher(postId));

  return { myUserId: MY_USER_ID, data, error, isLoading, mutate };
};
