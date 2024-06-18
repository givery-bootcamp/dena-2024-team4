import Head from 'next/head';
import { getServerSideCommonProps } from '@/libs/yamada-ui';
import PostForm from '@/components/PostForm';
import PostModal from '@/components/PostModal';

export const getServerSideProps = getServerSideCommonProps;

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Head>
        <title>Clone Twitter</title>
      </Head>
      <main></main>
    </>
  );
}
