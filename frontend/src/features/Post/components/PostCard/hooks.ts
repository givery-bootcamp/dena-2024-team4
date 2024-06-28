import useSWR, { useSWRConfig } from 'swr';

// 自分のユーザーID（仮置き）
const MY_USER_ID = 2;

export const usePostCard = () => {
  const { mutate } = useSWRConfig();

  return { myUserId: MY_USER_ID, mutate };
};
