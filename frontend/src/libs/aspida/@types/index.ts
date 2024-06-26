/* eslint-disable */
export type User = {
  id: number
  username: string
  display_name: string
  password: string
  created_at: string
  updated_at: string
  deleted_at?: string | undefined
}

export type Tweet = {
  id: number
  /** Reference to User ID */
  user_id: number
  title: string
  body: string
  created_at: string
  updated_at: string
  deleted_at?: string | undefined
}

export type TweetList = Tweet[]
