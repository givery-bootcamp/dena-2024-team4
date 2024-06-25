export const getPostFetcher = (postId: number) =>
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/tweets/${postId}`).then((res) =>
      res.json(),
    );
  