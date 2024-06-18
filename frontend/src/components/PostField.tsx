import { Textarea } from '@yamada-ui/react';
import { ChangeEvent } from 'react';

interface PostFieldProps {
  onInputChange: (value: string) => void;
}

const PostField: React.FC<PostFieldProps> = ({ onInputChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value);
  };

  return (
    <Textarea
      autosize
      placeholder="いまどうしてる"
    />
  );
};

export default PostField;
