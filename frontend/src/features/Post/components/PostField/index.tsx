import { ui, Textarea } from '@yamada-ui/react';
import { ChangeEvent, useState } from 'react';

interface PostFieldProps {
  isHidden: boolean;
  name: string;
  onFocus: () => void;
  required: boolean;
}

const PostField: React.FC<PostFieldProps> = ({ isHidden, name, onFocus, required }) => {
  return (
    <Textarea
      display={isHidden ? 'none' : 'block'}
      autosize
      placeholder="いまどうしてる"
      isDisabled={isHidden}
      name={name}
      onFocus={onFocus}
      required={required}
    />
  );
};

export default PostField;
