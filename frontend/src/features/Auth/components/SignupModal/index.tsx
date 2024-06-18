import { ui, Input, Button } from '@yamada-ui/react';
import Link from 'next/link';
import { AuthModal } from '@/features/Auth/components/Modal';
import { SIGNUP_INPUT_NAME, useSignupModal } from './hooks';

export const SignupModal: React.FC = () => {
  const { handleOnClose, handleOnChange, handleOnSubmit } = useSignupModal();

  return (
    <AuthModal onClose={handleOnClose} title="アカウント登録">
      <ui.form
        display="grid"
        alignItems="end"
        onSubmit={handleOnSubmit}
        gap="md"
        w="full"
        flex={1}
        gridTemplateRows="repeat(3, auto) 1fr"
        minH={{ base: 350, md: 'auto' }}
      >
        <Input
          onChange={handleOnChange}
          name={SIGNUP_INPUT_NAME.ID}
          required
          placeholder="ユーザーID"
          w="full"
        />
        <Input name={SIGNUP_INPUT_NAME.NAME} required placeholder="ユーザー名" w="full" />
        <Input
          onChange={handleOnChange}
          name={SIGNUP_INPUT_NAME.PASSWORD}
          required
          placeholder="パスワード"
          w="full"
        />
        <Button type="submit">登録</Button>
      </ui.form>
      <ui.p fontSize="sm">
        アカウントをお持ちの方は
        <Link href="/signin">
          <ui.span color="blue.500" _hover={{ textDecoration: 'underline' }}>
            ログイン
          </ui.span>
          してください
        </Link>
      </ui.p>
    </AuthModal>
  );
};
