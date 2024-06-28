// apiのレスポンスの型（仮置き）
export type PostResponse = {
  id: number;
  user_id: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  is_liked: boolean;
};

export function decodePostResponse(data: any): PostResponse {
  return {
    id: data.id,
    user_id: data.user_id,
    title: data.title,
    body: data.body,
    created_at: data.created_at,
    updated_at: data.updated_at,
    deleted_at: data.deleted_at,
    is_liked: Math.random() < 0.5, // （仮置き）TODO: 変更必須
  };
}

export function decodePostResponses(data: any[]): PostResponse[] {
  if (!data.length) return [];
  return data.map((d) => decodePostResponse(d));
}
