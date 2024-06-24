// apiのレスポンスの型（仮置き）
export type PostResponse = {
  id: number;
  user_id: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  user: {
    id: number;
    name: string;
    password: string;
    created_at: string;
    updated_at: string;
    deleted_at: null;
  };
};
