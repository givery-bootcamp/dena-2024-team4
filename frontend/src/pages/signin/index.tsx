import { SigninModal } from '@/features/Auth/components/SigninModal';
import { excludeSigninedUser } from '@/middlewares/excludeSigninedUser';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await excludeSigninedUser(context);
};

const Page: React.FC = () => {
  return (
    <main>
      <SigninModal />
    </main>
  );
};

export default Page;
