import { ui, Textarea } from '@yamada-ui/react';
import { ChangeEvent, useState } from 'react';

interface PostFieldProps {
  onInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  isHidden: boolean;
  name: string;
  setIsBodyTextAreaFocus: React.Dispatch<React.SetStateAction<boolean>>;
  required: boolean;
}

const PostField: React.FC<PostFieldProps> = ({ onInputChange, isHidden, name, setIsBodyTextAreaFocus, required }) => {
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
};

export default PostField;
