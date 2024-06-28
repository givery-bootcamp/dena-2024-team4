import { postSignin } from '@/features/apis/postSignin';
import { validateFormEventTarget } from '@/utils/form';
import { validtor } from '@/utils/string';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useCallback } from 'react';
import { toast } from 'sonner';

export const SIGNIN_INPUT_NAME = {
  USERNAME: 'username',
  PASSWORD: 'password',
};

const validater: Record<string, (arg: string) => boolean> = {
  [SIGNIN_INPUT_NAME.USERNAME]: validtor.alphanumeric,
  [SIGNIN_INPUT_NAME.PASSWORD]: validtor.ascii,
};

export const useSigninModal = () => {
  const router = useRouter();

  const handleOnClose = useCallback(() => {
    router.push('/');
  }, [router]);

  const handleOnSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        const { formData, form } = validateFormEventTarget(e.target);
        const { username, password } = Object.fromEntries(
          [...formData.entries()].filter((v): v is [string, string] => typeof v[1] === 'string'),
        );
        const idInput = form.elements.namedItem(SIGNIN_INPUT_NAME.USERNAME);
        const passwordInput = form.elements.namedItem(SIGNIN_INPUT_NAME.PASSWORD);

        if (
          !validater[SIGNIN_INPUT_NAME.USERNAME](username) &&
          idInput instanceof HTMLInputElement
        ) {
          idInput.setCustomValidity('ユーザー名は半角英数字で入力してください');
          idInput.reportValidity();
          return;
        }
        if (
          !validater[SIGNIN_INPUT_NAME.PASSWORD](password) &&
          passwordInput instanceof HTMLInputElement
        ) {
          passwordInput.setCustomValidity('パスワードは半角英数字で入力してください');
          passwordInput.reportValidity();
          return;
        }

        const response = await postSignin({ username, password });

        if (!response.ok) return toast.error('ユーザー名またはパスワードが間違っています');

        router.push('/home');
      } catch {
        toast.error('エラーが発生しました');
      }
    },
    [router],
  );

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (validater[e.target.name](e.target.value)) {
      e.target.setCustomValidity('');
      e.target.reportValidity();
      return;
    }
  }, []);

  return {
    handleOnClose,
    handleOnSubmit,
    handleOnChange,
  };
};
