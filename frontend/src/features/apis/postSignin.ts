export const postSignin = async (data: any) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/signin`, {
    method: 'post',
    credentials: 'include',
    body: data,
  });
