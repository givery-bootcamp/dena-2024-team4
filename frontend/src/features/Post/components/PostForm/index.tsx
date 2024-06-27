import { ui, Avatar, Flex, HStack, VStack, Textarea, Input } from '@yamada-ui/react';
import { usePostForm } from './hooks';


const PostForm: React.FC  = () => {
  const { handleOnSubmit, ref, handleFocusChange } = usePostForm();

  return (
    <ui.form padding={8} onSubmit={handleOnSubmit}>
      <HStack my={4} alignItems={'flex-start'}>
        <Avatar size="md" name="Hirotomo Yamada" />
        <VStack>
          <ui.div ref={ref} display={"none"}>
            <Input
              placeholder="タイトルを入力"
              name="title"
            >
            </Input>
          </ui.div>
          <Textarea
              autosize
              placeholder="いまどうしてる"
              name="body"
              onFocus={handleFocusChange}
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
