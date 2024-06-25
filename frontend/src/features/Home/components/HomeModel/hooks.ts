import { getPostsFetcher } from '@/features/apis/getPosts';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import useSWR from 'swr';

export const useHomeModal = (offset: number, limit: number) => {
  const router = useRouter();
  const { data, error, isLoading } = useSWR('/tweets', () => getPostsFetcher(offset, limit));

  const handleOnTapPost = useCallback(
    (postID: string) => {
      router.push(`post/${postID}`);
    },
    [router],
  );

  return { handleOnTapPost, data, error, isLoading };
};