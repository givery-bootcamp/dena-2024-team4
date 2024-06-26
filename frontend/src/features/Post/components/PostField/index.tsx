import { ui, Textarea } from '@yamada-ui/react';
import { ChangeEvent, useState } from 'react';

interface PostFieldProps {
  isHidden: boolean;
  name: string;
  setIsBodyTextAreaFocus: React.Dispatch<React.SetStateAction<boolean>>;
  required: boolean;
}

const PostField: React.FC<PostFieldProps> = ({ isHidden, name, setIsBodyTextAreaFocus, required }) => {
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
};

export default PostField;
