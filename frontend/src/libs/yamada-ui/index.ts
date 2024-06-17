import { GetServerSidePropsContext } from 'next';
import { extendConfig, extendTheme, UsageTheme } from '@yamada-ui/react';

export const getServerSideCommonProps = ({ req }: GetServerSidePropsContext) => {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  };
};
export const theme = extendTheme({})();
