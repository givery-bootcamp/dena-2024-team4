export const savePostFetcher = (userId: number, title: string, body: string) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/tweets`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ "user_id": userId, "title": title, "body": body }),
  }).then((res) => {
    res.json()
  });