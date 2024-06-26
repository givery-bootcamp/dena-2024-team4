/* eslint-disable */
export type User = {
  username: string
  display_name: string
  password: string
  created_at: string
  updated_at: string
  deleted_at?: string | undefined
}

export type Tweet = {
  title: string
  body: string
  created_at: string
  updated_at: string
  deleted_at?: string | undefined
}

export type TweetList = Tweet[]
