/* eslint-disable */
export type Methods = {
  /** Return user */
  get: {
    status: 200

    /** A successful response */
    resBody: {
      id?: number | undefined
      username?: string | undefined
      display_name?: string | undefined
    }
  }

  /** Return user id */
  post: {
    status: 200

    /** A successful response */
    resBody: {
      id?: number | undefined
    }

    reqBody: {
      display_name: string
      username: string
      password: string
    }
  }
}
