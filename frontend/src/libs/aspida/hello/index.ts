/* eslint-disable */
export type Methods = {
  /** Return Hello message */
  get: {
    query?: {
      /** Language selection */
      lang?: 'ja' | 'en' | undefined
    } | undefined

    status: 200

    /** A successful response */
    resBody: {
      message?: string | undefined
    }
  }
}
