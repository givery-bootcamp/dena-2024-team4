export const getPostsFetcher = (offset: number, limit: number) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/tweets?offset=${offset}&limit=${limit}`, {
    credentials: 'include',
  }).then((res) => res.json());
