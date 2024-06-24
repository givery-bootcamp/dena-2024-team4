import { useRouter } from 'next/router';
import { useCallback } from 'react';

export const useHomeModal = () => {
  const router = useRouter();

  const handleOnTapPost = useCallback(
    (postID: string) => {
      router.push(`post/${postID}`);
    },
    [router],
  );

  return { handleOnTapPost };
};
