export const updatePost = async (postId: number, data: any) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/tweets/${postId}`, {
    method: 'put',
    // credentials: 'include',
    body: JSON.stringify(data),
  });
