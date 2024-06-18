import { validateFormEventTarget } from '@/utils/form';
import { validtor } from '@/utils/string';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useCallback } from 'react';
import { toast } from 'sonner';

export const SIGNUP_INPUT_NAME = {
  ID: 'id',
  PASSWORD: 'password',
  NAME: 'name',
};

const validater: Record<string, (arg: string) => boolean> = {
  [SIGNUP_INPUT_NAME.ID]: validtor.alphanumeric,
  [SIGNUP_INPUT_NAME.PASSWORD]: validtor.ascii,
};

export const useSignupModal = () => {
  const router = useRouter();

  const handleOnClose = useCallback(() => {
    router.push('/signin');
  }, [router]);

  const handleOnSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { formData, form } = validateFormEventTarget(e.target);
      const { id, password } = Object.fromEntries(
        [...formData.entries()].filter((v): v is [string, string] => typeof v[1] === 'string'),
      );
      const idInput = form.elements.namedItem(SIGNUP_INPUT_NAME.ID);
      const passwordInput = form.elements.namedItem(SIGNUP_INPUT_NAME.PASSWORD);

      if (!validater[SIGNUP_INPUT_NAME.ID](id) && idInput instanceof HTMLInputElement) {
        idInput.setCustomValidity('IDは半角英数字で入力してください');
        idInput.reportValidity();
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

      // 登録処理
      toast('未実装');

      // router.push('/');
    } catch {
      toast.error('エラーが発生しました');
    }
  }, []);

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
