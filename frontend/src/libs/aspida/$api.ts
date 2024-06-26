import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1r1gcz6 } from './hello';
import type { Methods as Methods_sjgy3w } from './tweets';
import type { Methods as Methods_yydavm } from './tweets/_tweetId';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:9000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/hello';
  const PATH1 = '/tweets';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

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
    tweets: {
      _tweetId: (val1: number | string) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          /**
           * Return tweet
           * @returns A successful response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_yydavm['get']['resBody'], BasicHeaders, Methods_yydavm['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Return tweet
           * @returns A successful response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_yydavm['get']['resBody'], BasicHeaders, Methods_yydavm['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * Return updated time
           * @returns A successful response
           */
          put: (option: { body: Methods_yydavm['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_yydavm['put']['resBody'], BasicHeaders, Methods_yydavm['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * Return updated time
           * @returns A successful response
           */
          $put: (option: { body: Methods_yydavm['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_yydavm['put']['resBody'], BasicHeaders, Methods_yydavm['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * Return tweets
       * @returns A successful response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_sjgy3w['get']['resBody'], BasicHeaders, Methods_sjgy3w['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * Return tweets
       * @returns A successful response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_sjgy3w['get']['resBody'], BasicHeaders, Methods_sjgy3w['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      /**
       * Return id and created time
       * @returns A successful response
       */
      post: (option: { body: Methods_sjgy3w['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_sjgy3w['post']['resBody'], BasicHeaders, Methods_sjgy3w['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * Return id and created time
       * @returns A successful response
       */
      $post: (option: { body: Methods_sjgy3w['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_sjgy3w['post']['resBody'], BasicHeaders, Methods_sjgy3w['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
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
