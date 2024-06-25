import { Textarea } from '@yamada-ui/react';
import { ChangeEvent } from 'react';

interface PostFieldProps {
  onInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const PostField: React.FC<PostFieldProps> = ({ onInputChange }) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onInputChange(event);
  };

  return (
    <Textarea
      autosize
      placeholder="いまどうしてる"
      onChange={handleChange}
      required
    />
  );
};

export default PostField;
