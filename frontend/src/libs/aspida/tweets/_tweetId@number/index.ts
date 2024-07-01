/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Return tweet */
  get: {
    status: 200
    /** A successful response */
    resBody: Types.Tweet
  }

  /** Delete tweet */
  delete: {
    status: 200
  }

  /** Return updated time */
  put: {
    status: 204

    /** A successful response */
    resBody: {
      id?: number | undefined
      updated_at?: string | undefined
    }

    reqBody: {
      title: string
      body: string
    }
  }
}
