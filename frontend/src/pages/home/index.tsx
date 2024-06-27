import Sidebar from "@/components/layouts/Sidebar";
import { Home } from "@/features/Home/components/Home";

const Page: React.FC = () => {
  return (
    <Sidebar>
      <Home />
    </Sidebar>
  );
};

export default Page;
