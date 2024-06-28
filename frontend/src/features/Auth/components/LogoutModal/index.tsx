import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Flex, Image } from "@yamada-ui/react";
import { useRouter } from "next/router";
import { useCallback } from 'react';

const LogoutModal = () => {

    const router = useRouter()
    const handleCancel = useCallback(() => {
        router.back()
    }, [router])

    const logout = useCallback(() => {
        // 1.ログアウト処理(cookieで実装)

        // 2.signInに遷移
        router.push("/signin")
    }, [])

    return (
      <div>
        <Modal isOpen={true}>
        <ModalHeader display={"flex"} justifyContent={"center"}>Xからログアウトしますか</ModalHeader>
            <ModalBody>
            いつでもログインし直すことができます。アカウントを切り替える場合は、既存のアカウントを追加すると切り替えることができます。
            </ModalBody>

            <ModalFooter justifyContent={"center"}>
                <Flex direction={"column"}>
                    <Button variant="ghost" onClick={logout}>
                    ログアウト
                    </Button>
                    <Button colorScheme="primary" onClick={handleCancel}>キャンセル</Button>
                </Flex>
            </ModalFooter>
        </Modal>
      </div>
    );
  };

export default LogoutModal;