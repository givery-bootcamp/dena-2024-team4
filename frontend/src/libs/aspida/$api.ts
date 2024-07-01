import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1r1gcz6 } from './hello';
import type { Methods as Methods_1oqkkb0 } from './signin';
import type { Methods as Methods_1064xes } from './status';
import type { Methods as Methods_sjgy3w } from './tweets';
import type { Methods as Methods_ogekxv } from './tweets/_tweetId@number';
import type { Methods as Methods_tli9od } from './user';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:9000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/hello';
  const PATH1 = '/signin';
  const PATH2 = '/status';
  const PATH3 = '/tweets';
  const PATH4 = '/user';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    hello: {
      /**
       * Return Hello message
       * @returns A successful response
       */
      get: (option?: { query?: Methods_1r1gcz6['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1r1gcz6['get']['resBody'], BasicHeaders, Methods_1r1gcz6['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * Return Hello message
       * @returns A successful response
       */
      $get: (option?: { query?: Methods_1r1gcz6['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1r1gcz6['get']['resBody'], BasicHeaders, Methods_1r1gcz6['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1r1gcz6['get']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    signin: {
      /**
       * Sign in
       * @returns A successful response
       */
      post: (option: { body: Methods_1oqkkb0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1oqkkb0['post']['resBody'], BasicHeaders, Methods_1oqkkb0['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * Sign in
       * @returns A successful response
       */
      $post: (option: { body: Methods_1oqkkb0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1oqkkb0['post']['resBody'], BasicHeaders, Methods_1oqkkb0['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    status: {
      /**
       * Return signin status
       * @returns A successful response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1064xes['get']['resBody'], BasicHeaders, Methods_1064xes['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * Return signin status
       * @returns A successful response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1064xes['get']['resBody'], BasicHeaders, Methods_1064xes['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
    tweets: {
      _tweetId: (val1: number) => {
        const prefix1 = `${PATH3}/${val1}`;

        return {
          /**
           * Return tweet
           * @returns A successful response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_ogekxv['get']['resBody'], BasicHeaders, Methods_ogekxv['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Return tweet
           * @returns A successful response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_ogekxv['get']['resBody'], BasicHeaders, Methods_ogekxv['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * Delete tweet
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_ogekxv['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          /**
           * Delete tweet
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_ogekxv['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          /**
           * Return updated time
           * @returns A successful response
           */
          put: (option: { body: Methods_ogekxv['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_ogekxv['put']['resBody'], BasicHeaders, Methods_ogekxv['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * Return updated time
           * @returns A successful response
           */
          $put: (option: { body: Methods_ogekxv['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_ogekxv['put']['resBody'], BasicHeaders, Methods_ogekxv['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * Return tweets
       * @returns A successful response
       */
      get: (option?: { query?: Methods_sjgy3w['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_sjgy3w['get']['resBody'], BasicHeaders, Methods_sjgy3w['get']['status']>(prefix, PATH3, GET, option).json(),
      /**
       * Return tweets
       * @returns A successful response
       */
      $get: (option?: { query?: Methods_sjgy3w['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_sjgy3w['get']['resBody'], BasicHeaders, Methods_sjgy3w['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      /**
       * Return id and created time
       * @returns A successful response
       */
      post: (option: { body: Methods_sjgy3w['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_sjgy3w['post']['resBody'], BasicHeaders, Methods_sjgy3w['post']['status']>(prefix, PATH3, POST, option).json(),
      /**
       * Return id and created time
       * @returns A successful response
       */
      $post: (option: { body: Methods_sjgy3w['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_sjgy3w['post']['resBody'], BasicHeaders, Methods_sjgy3w['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_sjgy3w['get']['query'] } | undefined) =>
        `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    user: {
      /**
       * Return user
       * @returns A successful response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_tli9od['get']['resBody'], BasicHeaders, Methods_tli9od['get']['status']>(prefix, PATH4, GET, option).json(),
      /**
       * Return user
       * @returns A successful response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_tli9od['get']['resBody'], BasicHeaders, Methods_tli9od['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
      /**
       * Return user id
       * @returns A successful response
       */
      post: (option: { body: Methods_tli9od['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_tli9od['post']['resBody'], BasicHeaders, Methods_tli9od['post']['status']>(prefix, PATH4, POST, option).json(),
      /**
       * Return user id
       * @returns A successful response
       */
      $post: (option: { body: Methods_tli9od['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_tli9od['post']['resBody'], BasicHeaders, Methods_tli9od['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH4}`,
    },
    /**
     * Return root message
     * @returns A successful response
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, '', GET, option).text(),
    /**
     * Return root message
     * @returns A successful response
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, '', GET, option).text().then(r => r.body),
    $path: () => `${prefix}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
