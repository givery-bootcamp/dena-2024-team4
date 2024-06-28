/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** Return tweets */
  get: {
    query?: {
      /** Limit */
      limit?: number | undefined
      /** Offset */
      offset?: number | undefined
    } | undefined

    status: 200
    /** A successful response */
    resBody: Types.TweetList
  }

  /** Return id and created time */
  post: {
    status: 201

    /** A successful response */
    resBody: {
      id?: number | undefined
      created_at?: string | undefined
    }

    reqBody: {
      /** Reference to User ID */
      user_id: number
      title: string
      body: string
    }
  }
}
