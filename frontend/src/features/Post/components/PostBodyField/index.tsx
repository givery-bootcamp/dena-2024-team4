import { ChangeEvent } from "react";

interface PostBodyFieldProps {
    onInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    isHidden: boolean;
    name: string;
    setIsBodyTextAreaFocus: React.Dispatch<React.SetStateAction<boolean>>;
    required: boolean;
  }

export const PostBodyField: React.FC<PostBodyFieldProps> = ({ onInputChange, isHidden, name, setIsBodyTextAreaFocus, required }) => {
    return (
        <></>
    )
}