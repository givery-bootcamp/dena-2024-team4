export const createUser = async (data: any) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
    method: 'post',
    credentials: 'include',
    body: JSON.stringify(data),
  });
