import { getUser } from '@/features/apis/getUser';
import { savePostFetcher } from '@/features/apis/savePost';
import { validateFormEventTarget } from '@/utils/form';
import { FormEvent, useCallback, useState } from 'react';
import { toast } from 'sonner';
import useSWR, { useSWRConfig } from 'swr';

export const usePostForm = () => {
  const { data } = useSWR('/api/user', getUser);
  const [isFocus, setIsFocus] = useState(false);
  const { mutate } = useSWRConfig();

  const handleOnSubmit = useCallback(
    (onClose?: () => void) => async (e: FormEvent<HTMLFormElement>) => {
      const { formData, form } = validateFormEventTarget(e.target);
      const { title, body } = Object.fromEntries(
        [...formData.entries()].filter((v): v is [string, string] => typeof v[1] === 'string'),
      );

      e.preventDefault();
      try {
        await savePostFetcher(1, title, body);
        await mutate('/tweets');
        form.reset();
        toast('投稿を作成しました！');
        if (onClose == undefined) {
          return;
        }
        onClose();
      } catch (error) {
        console.error('Error:', error);
      }
    },
    [mutate],
  );

  return {
    handleOnSubmit,
    isFocus,
    setIsFocus,
    username: data?.username,
  };
};
