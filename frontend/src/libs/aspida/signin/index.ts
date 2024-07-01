/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** Sign in */
  post: {
    status: 200

    /** A successful response */
    resBody: {
      user?: Types.User | undefined
    }

    reqBody: {
      username?: string | undefined
      password?: string | undefined
    }
  }
}
