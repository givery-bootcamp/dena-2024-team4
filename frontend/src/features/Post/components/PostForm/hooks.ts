import { savePostFetcher } from "@/features/apis/savePost";
import { validateFormEventTarget } from "@/utils/form";
import { FormEvent, useCallback, useState } from "react";

export const usePostForm = () => {
    const USER_ID = 1;
    const [isFocus, setIsFocus] = useState(false);

    const handleOnSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        const { formData, form } = validateFormEventTarget(e.target);
        const { title, body } = Object.fromEntries(
            [...formData.entries()].filter((v): v is [string, string] => typeof v[1] === 'string'),
        );

        e.preventDefault();
        try {
            savePostFetcher(USER_ID, title, body)
            form.reset();
        } catch (error) {
            console.error('Error:', error);
        }
    }, []);

    return {
        handleOnSubmit,
        isFocus,
        setIsFocus
      };
}