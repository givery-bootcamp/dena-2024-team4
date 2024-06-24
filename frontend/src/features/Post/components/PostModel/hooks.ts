import { useRouter } from 'next/router';
import { useCallback } from 'react';

export const usePostModal = () => {
  // 自分のユーザーID（仮置き）
  const MY_USER_ID = 2;

  return { MY_USER_ID };
};
