import { Button, Divider, Flex, HStack, Icon, VStack } from "@yamada-ui/react";
import { IconType } from "react-icons";

type SidebarProps = {
  items: SidebarItem[];
  children: React.ReactNode;
};

type SidebarItem = {
  title: string,
  icon: IconType,
  action: () => void,
};

export default function Sidebar({ items, children }: SidebarProps) {
  return (
    <Flex w="full" flexDirection="row" overflow="hidden">
      <VStack as="nav" w="300px" h="100vh" padding="md" bg="gray.50">
        {items.map((item, index) => (
          <Button key={index} variant="ghost" fontSize="lg" leftIcon={<Icon as={item.icon} />} p="md" rounded="40" w="fit-content" onClick={item.action}>{item.title}</Button>
        ))}
        <Button fontSize="lg" p="md" rounded="40" bg="sky.400">ポストする</Button>
      </VStack>
      {children}
    </Flex>
  )
}