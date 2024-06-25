import Sidebar from "@/components/layouts/Sidebar";
import PostDetail from "@/features/Post/components/PostDetail";
import { VStack } from "@yamada-ui/react";
import { useRouter } from "next/router";

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
