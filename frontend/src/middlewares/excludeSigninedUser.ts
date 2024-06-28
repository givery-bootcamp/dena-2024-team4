import { getCookie } from 'cookies-next';
import { GetServerSideProps } from 'next';

export const excludeSigninedUser: GetServerSideProps = async ({ req, res }) => {
  const jwt = getCookie('jwt', { req, res });

  if (jwt)
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    };

  const response = await fetch(`${process.env.API_URL}/user`, {
    headers: { cookie: `jwt=${jwt}` },
  });

  if (response.ok)
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    };

  return {
    props: {},
  };
};
