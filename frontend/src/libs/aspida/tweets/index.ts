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
}
