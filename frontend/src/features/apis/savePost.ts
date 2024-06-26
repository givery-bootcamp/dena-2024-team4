export const savePostFetcher = (userId: number, title: string, body: string) =>
  fetch(`http://localhost:9000/tweets`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ "user_id": userId, "title": title, "body": body }),
  }).then((res) => {
    res.json()
  });