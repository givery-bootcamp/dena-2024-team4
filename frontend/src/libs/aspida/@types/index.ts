/* eslint-disable */
export type User = {
  id?: number | undefined
  username?: string | undefined
  display_name?: string | undefined
  password?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  deleted_at?: string | undefined
}

export type Tweet = {
  id?: number | undefined
  /** Reference to User ID */
  user_id?: number | undefined
  title?: string | undefined
  body?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  deleted_at?: string | undefined
}

export type TweetList = Tweet[]
