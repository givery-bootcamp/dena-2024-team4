import { Avatar, Button, Flex, HStack, VStack } from '@yamada-ui/react';
import PostField from './PostField';
import { useCallback, useState } from 'react';

const PostForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  return (
    <VStack padding={8}>
      <HStack mt={12} alignItems={'flex-start'}>
        <Avatar size="md" name="Hirotomo Yamada" />
        <PostField onInputChange={handleInputChange} />
      </HStack>
      <Flex justify={'right'}>
        <Button colorScheme="sky" rounded="24px" isDisabled={!inputValue}>
          ポストする
        </Button>
      </Flex>
    </VStack>
  );
};

export default PostForm;
