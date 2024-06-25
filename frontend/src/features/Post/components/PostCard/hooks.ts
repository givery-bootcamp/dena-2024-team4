import { getPostFetcher } from '@/features/apis/getPost';
import useSWR from 'swr';

export const usePostCard = () => {
  // 自分のユーザーID（仮置き）
  const MY_USER_ID = 2;

  return { MY_USER_ID };
};
