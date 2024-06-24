import { getPostsFetcher } from '@/features/apis/getPosts';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import useSWR from 'swr';

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

export const useGetPosts = (offset: number, limit: number) => {
  const { data, error, isLoading } = useSWR('/tweets', () => getPostsFetcher(offset, limit));

  return { data, error, isLoading };
};
