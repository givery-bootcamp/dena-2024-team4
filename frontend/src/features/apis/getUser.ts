export const getUser = () =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
    credentials: 'include',
  }).then((res) => res.json());
