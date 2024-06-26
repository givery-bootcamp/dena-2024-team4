import Head from 'next/head';
import { getServerSideCommonProps } from '@/libs/yamada-ui';

export const getServerSideProps = getServerSideCommonProps;

export default function Home() {
  return (
    <>
      <Head>
        <title>Clone Twitter</title>
      </Head>
      <main></main>
    </>
  );
}
