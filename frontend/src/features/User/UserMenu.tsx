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
  
  const { hovered, ref } = useHover()

  return (
    <Popover placement="top">
    <PopoverTrigger>
    <HStack ref={ref} cursor={"pointer"} onClick={handleClick} bg={hovered ? "blue.200" : "transparent"} >
            <Avatar size="md" name="Hirotomo Yamada" />
            <Flex direction={"column"}>
                <Text whiteSpace={"nowrap"}>ユーザー名</Text>
                <Text whiteSpace={"nowrap"}>@user-12345</Text>
            </Flex>
            <BsThreeDots />
        </HStack>
    </PopoverTrigger>

    <PopoverContent>
      <Button onClick={logout}>@user-12345からログアウト</Button>
    </PopoverContent>
  </Popover>
  );
};