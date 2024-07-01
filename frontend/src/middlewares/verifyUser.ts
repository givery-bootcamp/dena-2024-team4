import { getCookie, getCookies } from 'cookies-next';
import { GetServerSideProps } from 'next';

export const verifyUser: GetServerSideProps = async ({ req, res }) => {
  const jwt = getCookie('jwt', { req, res });

  if (!jwt)
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };

  const response = await fetch(`${process.env.API_URL}/user`, {
    headers: { cookie: `jwt=${jwt}` },
  });

  if (!response.ok)
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };

  return {
    props: {},
  };
};
