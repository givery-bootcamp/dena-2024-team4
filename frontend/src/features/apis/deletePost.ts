export const deletePostFetcher = (postId: number) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/tweets/${postId}`, {
    method: 'DELETE',
    credentials: 'include',
  });
