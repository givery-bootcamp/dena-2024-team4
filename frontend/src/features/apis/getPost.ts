export const getPostFetcher = (postId: number) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/tweets/${postId}`, {
    credentials: 'include',
  }).then((res) => res.json());
