import { SignupModal } from '@/features/Auth/components/SignupModal';
import { excludeSigninedUser } from '@/middlewares/excludeSigninedUser';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await excludeSigninedUser(context);
};

const Page: React.FC = () => {
  return (
    <main>
      <SignupModal />
    </main>
  );
};

export default Page;
