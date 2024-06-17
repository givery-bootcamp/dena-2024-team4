import { Avatar, Button, Flex, HStack } from '@yamada-ui/react';
import PostField from './PostField';

const PostForm = () => {
  return (
    <div>
      <HStack>
        <Avatar size="md" name="Hirotomo Yamada" />
        <PostField />
      </HStack>
      <Flex justify={'right'} mt={8}>
        <Button colorScheme="sky" rounded="24px">
          ポストする
        </Button>
      </Flex>
    </div>
  );
};

export default PostForm;
