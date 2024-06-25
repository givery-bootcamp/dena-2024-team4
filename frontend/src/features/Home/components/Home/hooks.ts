import { getPostsFetcher } from '@/features/apis/getPosts';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import useSWR from 'swr';

export const useHome = (offset: number, limit: number) => {
  const router = useRouter();
  const { data, error, isLoading } = useSWR('/tweets', () => getPostsFetcher(offset, limit));

  const handleOnTapPost = useCallback(
    (postId: string) => {
      router.push(`post/${postId}`);
    },
    [router],
  );

  return { handleOnTapPost, data, error, isLoading };
};
