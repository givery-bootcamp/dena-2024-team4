import { Textarea } from '@yamada-ui/react';
import { ChangeEvent } from 'react';

interface PostBodyFieldProps {
    isHidden: boolean;
    name: string;
    setIsBodyTextAreaFocus: React.Dispatch<React.SetStateAction<boolean>>;
    required: boolean;
  }

export const PostBodyField: React.FC<PostBodyFieldProps> = ({ isHidden, name, setIsBodyTextAreaFocus, required }) => {
    return (
        <Textarea
            display={isHidden ? 'none' : 'block'}
            autosize
            placeholder="いまどうしてる"
            isDisabled={isHidden}
            name={name}
            onFocus={() => setIsBodyTextAreaFocus(true)}
            required={required}
        />
    );
}