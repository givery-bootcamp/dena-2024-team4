import { ui, Avatar, Flex, HStack, VStack, Textarea, Input } from '@yamada-ui/react';
import { usePostForm } from './hooks';

interface PostFormProps {
  onClose?: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ onClose }) => {
  const { username, handleOnSubmit, isFocus, setIsFocus } = usePostForm();

  return (
    <ui.form padding={8} onSubmit={handleOnSubmit(onClose)}>
      <HStack my={4} alignItems={'flex-start'}>
        <Avatar size="md" name={username} />
        <VStack>
          <Input
            placeholder="タイトルを入力"
            name="title"
            display={isFocus ? 'block' : 'none'}
          ></Input>
          <Textarea
            autosize
            placeholder="いまどうしてる"
            name="body"
            onFocus={() => setIsFocus(true)}
            required
          ></Textarea>
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
