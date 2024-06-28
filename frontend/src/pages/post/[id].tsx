import Sidebar from "@/components/layouts/Sidebar";
import PostDetail from "@/features/Post/components/PostDetail";
import { verifyUser } from "@/middlewares/verifyUser";
import { VStack } from "@yamada-ui/react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await verifyUser(context);
};

const Page: React.FC = () => {
  const router = useRouter()
  const id = router.query.id
  return (
    <Sidebar>
      <VStack direction="column" display={"inline-block"}>
        {id !== undefined && <PostDetail postId={id.toString()} />}
      </VStack>
    </Sidebar>
  );
};

export default Page;
