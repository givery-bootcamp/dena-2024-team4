import { ui, Avatar, Button, Flex, HStack, VStack } from '@yamada-ui/react';
import { ChangeEvent, useCallback, useState, FormEvent } from 'react';
import PostField from '../PostField';
import { usePostForm } from './hooks';
import { PostBodyField } from '../PostBodyField';


const PostForm: React.FC  = () => {
  const { handleOnSubmit } = usePostForm();
  const formData = new FormData();
  const [isBodyTextAreaFocus, setIsBodyTextAreaFocus] = useState(false);

  return (
    <ui.form padding={8} onSubmit={handleOnSubmit}>
      <HStack my={4} alignItems={'flex-start'}>
        <Avatar size="md" name="Hirotomo Yamada" />
        <VStack>
          <PostField isHidden={!isBodyTextAreaFocus} name="title" setIsBodyTextAreaFocus={setIsBodyTextAreaFocus} required={false} />
          <PostBodyField isHidden={false} name="body" setIsBodyTextAreaFocus={setIsBodyTextAreaFocus} required={true} />
        </VStack>
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
