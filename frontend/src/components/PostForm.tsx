import { ui, Avatar, Button, Flex, HStack, VStack } from '@yamada-ui/react';
import PostField from './PostField';
import { ChangeEvent, useCallback, useState } from 'react';

const PostForm = () => {
  const handleTextAreaChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
  }, []);

  return (
    <ui.form padding={8}>
      <HStack my={4} alignItems={'flex-start'}>
        <Avatar size="md" name="Hirotomo Yamada" />
        <PostField onInputChange={handleTextAreaChange} />
      </HStack>
      <Flex justify={'right'}>
        <ui.input color={'white'} backgroundColor={'sky.500'} type='submit' value={"ポストする"} rounded="24px" px={4} py={2}>
        </ui.input>
      </Flex>
    </ui.form>
  );
};

export default PostForm;
