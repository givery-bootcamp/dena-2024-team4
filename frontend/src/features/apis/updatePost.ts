export const updatePost = async (postId: number, data: any) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/tweets/${postId}`, {
    method: 'put',
    body: JSON.stringify(data),
  });
