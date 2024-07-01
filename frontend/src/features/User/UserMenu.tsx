import { ChangeEvent, useCallback } from 'react';
import {
  Avatar,
  Button,
  HStack,
  VStack,
  Text,
  Flex,
  useHover,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
} from '@yamada-ui/react';
import { BsThreeDots } from 'react-icons/bs';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { getUser } from '../apis/getUser';

export const UserMenu: React.FC = () => {
  const router = useRouter();

  const logout = useCallback(() => {
    router.push('/logout');
  }, [router]);

  const { data } = useSWR('/api/user', getUser);

  return (
    <Popover placement="top">
      <PopoverTrigger>
        <Button
          display={'grid'}
          gridTemplateColumns={'auto 1fr auto'}
          variant="unstyled"
          _hover={{ backgroundColor: 'gray.100' }}
          height={'max-content'}
          padding={2}
        >
          <Avatar size="sm" name={data?.display_name} />
          <Flex direction={'column'}>
            <Text whiteSpace={'nowrap'}>{data?.display_name}</Text>
            <Text whiteSpace={'nowrap'} fontWeight={'normal'}>
              @{data?.username}
            </Text>
          </Flex>
          <BsThreeDots />
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <Button onClick={logout}>@{data?.username}からログアウト</Button>
      </PopoverContent>
    </Popover>
  );
};
