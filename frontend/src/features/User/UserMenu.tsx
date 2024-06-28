import { ChangeEvent, useCallback } from 'react';
import  { Avatar, Button, HStack, VStack, Text, Flex, useHover, Tooltip, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody } from "@yamada-ui/react"
import { BsThreeDots } from "react-icons/bs";
import { useRouter } from "next/router";

export const UserMenu: React.FC = () => {
  const router = useRouter()

  const handleClick = useCallback(() => {
    // ここにクリックされたときの処理を記述します
    console.log("HStack clicked"); 
  }, []);

  const logout = useCallback(() => {
    router.push('/logout');
  }, [router])

  return (
    <Popover placement="top">
      <PopoverTrigger>
          <Button lineHeight={"1.3"} bg={"white"} _hover={{ backgroundColor: "gray.100" }}>
            <HStack cursor={"pointer"} rounded="32px" p={2} >
                <Avatar size="sm" name="Hirotomo Yamada" />
                <Flex direction={"column"}>
                    <Text whiteSpace={"nowrap"}>ユーザー名</Text>
                    <Text whiteSpace={"nowrap"} fontWeight={'normal'}>@user-12345</Text>
                </Flex>
                <BsThreeDots />
            </HStack>
          </Button>
      </PopoverTrigger>

      <PopoverContent>
        <Button onClick={logout}>@user-12345からログアウト</Button>
      </PopoverContent>
  </Popover>
  );
};