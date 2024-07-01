import { createUser } from '@/features/apis/createUser';
import { postSignin } from '@/features/apis/postSignin';
import { validateFormEventTarget } from '@/utils/form';
import { validtor } from '@/utils/string';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useCallback } from 'react';
import { toast } from 'sonner';

export const SIGNUP_INPUT_NAME = {
  NAME: 'name',
  DISPLAYNAME: 'displayName',
  PASSWORD: 'password',
};

const validater: Record<string, (arg: string) => boolean> = {
  [SIGNUP_INPUT_NAME.NAME]: validtor.alphanumeric,
  [SIGNUP_INPUT_NAME.PASSWORD]: validtor.ascii,
};

export const useSignupModal = () => {
  const router = useRouter();

  const handleOnClose = useCallback(() => {
    router.push('/signin');
  }, [router]);

  const handleOnSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        const { formData, form } = validateFormEventTarget(e.target);
        const { displayName, password, name } = Object.fromEntries(
          [...formData.entries()].filter((v): v is [string, string] => typeof v[1] === 'string'),
        );
        const nameInput = form.elements.namedItem(SIGNUP_INPUT_NAME.NAME);
        const passwordInput = form.elements.namedItem(SIGNUP_INPUT_NAME.PASSWORD);

        if (!validater[SIGNUP_INPUT_NAME.NAME](name) && nameInput instanceof HTMLInputElement) {
          nameInput.setCustomValidity('IDは半角英数字で入力してください');
          nameInput.reportValidity();
          return;
        }
        if (
          !validater[SIGNUP_INPUT_NAME.PASSWORD](password) &&
          passwordInput instanceof HTMLInputElement
        ) {
          passwordInput.setCustomValidity('パスワードは半角英数字で入力してください');
          passwordInput.reportValidity();
          return;
        }

        await createUser({ display_name: displayName, password, username: name });
        await postSignin({ password, username: name });
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
