import { UserMenu } from '@/features/User/UserMenu';
import { Button, Divider, Flex, HStack, Icon, Spacer, VStack, ui } from '@yamada-ui/react';
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
        <Button fontSize="lg" p="md" rounded="40" bg="sky.400">
          ポストする
        </Button>
        <Flex justifyContent={'end'} direction={'column'}>
          <UserMenu />
        </Flex>
      </VStack>
      <Divider orientation="vertical" h="100vh" />
      {children}
    </Flex>
  );
}
