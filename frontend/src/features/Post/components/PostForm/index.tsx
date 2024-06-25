import { ui, Avatar, Button, Flex, HStack, VStack } from '@yamada-ui/react';
import { ChangeEvent, useCallback, useState, FormEvent } from 'react';
import PostField from '../PostField';


const PostForm = () => {
  const formData = new FormData();

  const handleTextAreaChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
    formData.append("postData", e.target.value);
  }, []);

  const handleOnSubmit = useCallback(async　(e: FormEvent<HTMLFormElement>) => {
    console.log('送信テスト');
    console.log("フォームログの中身: " + formData);
    console.log("フォームログの中身: " + formData.get("postData"));
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }, []);

  return (
    <ui.form padding={8} onSubmit={handleOnSubmit}>
      <HStack my={4} alignItems={'flex-start'}>
        <Avatar size="md" name="Hirotomo Yamada" />
        <PostField onInputChange={handleTextAreaChange} />
      </HStack>
      <Flex justify={'right'}>
        <ui.input
          color={'white'}
          backgroundColor={'sky.500'}
          type="submit"
          value={'ポストする'}
          rounded="24px"
          px={4}
          py={2}
        ></ui.input>
      </Flex>
    </ui.form>
  );
};

export default PostForm;
