import { getPostFetcher } from '@/features/apis/getPost';
import useSWR from 'swr';

// 自分のユーザーID（仮置き）
const MY_USER_ID = 2;

export const usePostCard = () => {
  return { myUserId: MY_USER_ID };
};
