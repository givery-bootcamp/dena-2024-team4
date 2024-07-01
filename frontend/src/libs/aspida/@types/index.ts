/* eslint-disable */
export type User = {
  id: number
  username: string
  display_name: string
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

export type TweetsList = {
  tweet?: Tweet | undefined
}[]

export type Error404Response = {
  message?: string | undefined
}

export type Error500Response = {
  message?: string | undefined
}
