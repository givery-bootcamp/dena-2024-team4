import Sidebar from '@/components/layouts/Sidebar';
import { Home } from '@/features/Home/components/Home';
import { verifyUser } from '@/middlewares/verifyUser';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = verifyUser;

const Page: React.FC = () => {
  return (
    <Sidebar>
      <Home />
    </Sidebar>
  );
};

export default Page;
