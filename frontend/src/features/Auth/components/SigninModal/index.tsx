import { ui, Input, Button } from '@yamada-ui/react';
import Link from 'next/link';
import { SIGNIN_INPUT_NAME, useSigninModal } from './hooks';
import { AuthModal } from '@/features/Auth/components/Modal';

export const SigninModal: React.FC = () => {
  const { handleOnClose, handleOnSubmit, handleOnChange } = useSigninModal();

  return (
    <AuthModal onClose={handleOnClose} title="掲示板にログイン">
      <ui.form
        display="grid"
        alignItems="end"
        gap="md"
        w="full"
        flex={1}
        gridTemplateRows="repeat(2, auto) 1fr"
        minH={{ base: 350, md: 'auto' }}
        onSubmit={handleOnSubmit}
      >
        <Input
          required
          onChange={handleOnChange}
          name={SIGNIN_INPUT_NAME.USERNAME}
          placeholder="ユーザー名"
          w="full"
        />
        <Input
          required
          onChange={handleOnChange}
          name={SIGNIN_INPUT_NAME.PASSWORD}
          placeholder="パスワード"
          type="password"
          autoComplete="current-password"
          w="full"
        />
        <Button type="submit">ログイン</Button>
      </ui.form>
      <ui.p fontSize="sm">
        アカウントをお持ちでない場合は
        <Link href="/signup">
          <ui.span color="blue.500" _hover={{ textDecoration: 'underline' }}>
            登録
          </ui.span>
        </Link>
      </ui.p>
    </AuthModal>
  );
};
