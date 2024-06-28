import PostForm from '@/features/Post/components/PostForm';
import { Button, Divider, Flex, HStack, Icon, VStack, Modal, useDisclosure, Spacer, VStack, ui } from '@yamada-ui/react';
import { UserMenu } from '@/features/User/UserMenu';
import { IconType } from 'react-icons';
import { FaHouse } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa6';

type SidebarProps = {
  children: React.ReactNode;
};

type SidebarItem = {
  title: string;
  icon: IconType;
  action: () => void;
};

const items: SidebarItem[] = [
  {
    title: 'ホーム',
    icon: FaHouse,
    action: () => console.log('ホーム'),
  },
  {
    title: 'プロフィール',
    icon: FaUser,
    action: () => console.log('プロフィール'),
  },
];

export default function Sidebar({ children }: SidebarProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex overflow={'hidden'}>
      <VStack maxWidth={"280px"} w={"full"} h="100vh" display={"grid"} gridTemplateRows={"repeat(3,auto) 1fr"} padding="md">
        {items.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            fontSize="lg"
            leftIcon={<Icon as={item.icon} />}
            p="md"
            rounded="40"
            w="fit-content"
            onClick={item.action}
          >
            {item.title}
          </Button>
        ))}
        <Button fontSize="lg" p="md" rounded="40" bg="sky.400" onClick={onOpen}>
          ポストする
        </Button>
        <Flex justifyContent={'end'} direction={'column'}>
          <UserMenu />
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose}>
          <PostForm onClose={onClose} />
        </Modal>
      </VStack>
      <Divider orientation="vertical" h="100vh" />
      {children}
    </Flex>
  );
}
