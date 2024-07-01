import PostForm from '@/features/Post/components/PostForm';
import { Button, Divider, Flex, Icon, Modal, useDisclosure, VStack } from '@yamada-ui/react';
import { UserMenu } from '@/features/User/UserMenu';
import { IconType } from 'react-icons';
import { FaHouse } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa6';
import { useRouter } from 'next/router';
import { toast } from 'sonner';

type SidebarProps = {
  children: React.ReactNode;
};

type SidebarItem = {
  title: string;
  icon: IconType;
  action: () => void;
};

export default function Sidebar({ children }: SidebarProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const items: SidebarItem[] = [
    {
      title: 'ホーム',
      icon: FaHouse,
      action: () => router.push('/home'),
    },
    {
      title: 'プロフィール',
      icon: FaUser,
      action: () => toast('Coming soon...'),
    },
  ];

  return (
    <Flex overflow={'hidden'}>
      <VStack
        maxWidth={'280px'}
        w={'full'}
        h="100vh"
        display={'grid'}
        gridTemplateRows={'repeat(3,auto) 1fr'}
        padding="md"
      >
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
