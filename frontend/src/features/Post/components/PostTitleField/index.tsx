import { ChangeEvent } from "react";

interface PostTitleFieldProps {
    onInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    isHidden: boolean;
    name: string;
    required: boolean;
  }

export const PostTitleField: React.FC<PostTitleFieldProps> = ({ onInputChange, isHidden, name, required }) => {
    return (
        <></>
    )
}