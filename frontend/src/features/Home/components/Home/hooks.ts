import { getPostsFetcher } from '@/features/apis/getPosts';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import useSWR from 'swr';

export const useHome = () => {
  const router = useRouter();

  const handleOnTapPost = useCallback(
    (postId: string) => {
      router.push(`post/${postId}`);
    },
    [router],
  );

  return { handleOnTapPost };
};

export const useGetPosts = (offset: number, limit: number) => {
  const { data, error, isLoading } = useSWR('/tweets', () => getPostsFetcher(offset, limit));

  return { data, error, isLoading };
};
