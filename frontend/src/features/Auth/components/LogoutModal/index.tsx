import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Flex, Image } from '@yamada-ui/react';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { deleteCookie } from 'cookies-next';

const LogoutModal = () => {
  const router = useRouter();
  const handleCancel = useCallback(() => {
    router.back();
  }, [router]);

  const logout = useCallback(() => {
    // 1.ログアウト処理(cookieで実装)
    deleteCookie('jwt');

    // 2.signInに遷移
    router.push('/signin');
  }, [router]);

  return (
    <div>
      <Modal isOpen={true}>
        <ModalHeader display={'flex'} justifyContent={'center'}>
          Xからログアウトしますか
        </ModalHeader>
        <ModalBody fontSize={'sm'}>
          いつでもログインし直すことができます。アカウントを切り替える場合は、既存のアカウントを追加すると切り替えることができます。
        </ModalBody>

        <ModalFooter justifyContent={'center'}>
          <Flex direction={'column'} gap={'sm'}>
            <Button
              colorScheme="primary"
              onClick={logout}
              isRounded={true}
              px={16}
              py={2}
              fontSize={'sm'}
            >
              ログアウト
            </Button>
            <Button
              variant="outline"
              onClick={handleCancel}
              isRounded={true}
              px={16}
              py={2}
              fontSize={'sm'}
            >
              キャンセル
            </Button>
          </Flex>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default LogoutModal;
