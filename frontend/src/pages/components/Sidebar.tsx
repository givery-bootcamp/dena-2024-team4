import { Button, Divider, HStack, Icon, VStack } from "@yamada-ui/react";
import { FaRegUser } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";

export default function Sidebar() {
  return (
    <VStack as="nav" w="300px" h="100vh" padding="md" bg="gray.50">
      <Button variant="ghost" fontSize="lg" leftIcon={<Icon as={FaHouse} />} p="md" rounded="40" w="fit-content">ホーム</Button>
      <Button variant="ghost" fontSize="lg" leftIcon={<Icon as={FaRegUser} />} p="md" rounded="40" w="fit-content">プロフィール</Button>
      <Button fontSize="lg" p="md" rounded="40" bg="sky.400">ポストする</Button>
    </VStack>
  )
}