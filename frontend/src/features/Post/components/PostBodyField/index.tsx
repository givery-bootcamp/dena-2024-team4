import { Textarea } from '@yamada-ui/react';
import { ChangeEvent } from 'react';

interface PostBodyFieldProps {
    onInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    isHidden: boolean;
    name: string;
    setIsBodyTextAreaFocus: React.Dispatch<React.SetStateAction<boolean>>;
    required: boolean;
  }

export const PostBodyField: React.FC<PostBodyFieldProps> = ({ onInputChange, isHidden, name, setIsBodyTextAreaFocus, required }) => {
    return (
        <Textarea
            display={isHidden ? 'none' : 'block'}
            autosize
            placeholder="いまどうしてる"
            onChange={onInputChange}
            isDisabled={isHidden}
            name={name}
            onFocus={() => setIsBodyTextAreaFocus(true)}
            required={required}
        />
    );
}