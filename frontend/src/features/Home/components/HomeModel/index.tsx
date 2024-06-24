import { Divider, VStack } from '@yamada-ui/react';
import PostDetail from '@/pages/components/PostDetail';
import { PostResponse } from '@/pages/api/PostResponse';
import { useHomeModal } from './hooks';
import Sidebar from '@/pages/components/Sidebar';

const posts: PostResponse[] = [
  {
    id: 1,
    user_id: 1,
    title: "あの地球人のように?",
    body: "クリリンのことか… クリリンのことかーーーーーっ!!!!!",
    created_at: "2022-01-01",
    updated_at: "2022-01-01",
    deleted_at: null,
    user: {
      id: 1,
      name: "孫悟空",
      password: "password",
      created_at: "2022-01-02",
      updated_at: "2022-01-02",
      deleted_at: null,
    },
  },
  {
    id: 2,
    user_id: 1,
    title: "じゃあなみんなーー!!",
    body: "死んだらまた会おうなーーーー!!",
    created_at: "2022-01-02",
    updated_at: "2022-01-02",
    deleted_at: null,
    user: {
      id: 1,
      name: "孫悟空",
      password: "password",
      created_at: "2022-01-02",
      updated_at: "2022-01-02",
      deleted_at: null,
    },
  },
  {
    id: 3,
    user_id: 1,
    title: "じゃあなみんなーー!!",
    body: "死んだらまた会おうなーーーー!!",
    created_at: "2022-01-02",
    updated_at: "2022-01-02",
    deleted_at: null,
    user: {
      id: 1,
      name: "孫悟空",
      password: "password",
      created_at: "2022-01-02",
      updated_at: "2022-01-02",
      deleted_at: null,
    },
  },
  {
    id: 4,
    user_id: 1,
    title: "星はこわせても…",
    body: "たったひとりの人間はこわせないようだな……",
    created_at: "2022-01-02",
    updated_at: "2022-01-02",
    deleted_at: null,
    user: {
      id: 1,
      name: "孫悟空",
      password: "password",
      created_at: "2022-01-02",
      updated_at: "2022-01-02",
      deleted_at: null,
    },
  },
  {
    id: 5,
    user_id: 1,
    title: "落ちこぼれだって必死で努力すりゃ",
    body: "エリートを超えることがあるかもよ",
    created_at: "2022-01-02",
    updated_at: "2022-01-02",
    deleted_at: null,
    user: {
      id: 1,
      name: "孫悟空",
      password: "password",
      created_at: "2022-01-02",
      updated_at: "2022-01-02",
      deleted_at: null,
    },
  },
  {
    id: 6,
    user_id: 2,
    title: "おとうさんを…",
    body: "いじめるなーーーっ!!!!!",
    created_at: "2022-01-02",
    updated_at: "2022-01-02",
    deleted_at: null,
    user: {
      id: 2,
      name: "孫悟飯",
      password: "password",
      created_at: "2022-01-02",
      updated_at: "2022-01-02",
      deleted_at: null,
    },
  },
  {
    id: 7,
    user_id: 3,
    title: "ギャルのパンティーおくれーーーっ!!!!!",
    body: "",
    created_at: "2022-01-02",
    updated_at: "2022-01-02",
    deleted_at: null,
    user: {
      id: 3,
      name: "ウーロン",
      password: "password",
      created_at: "2022-01-02",
      updated_at: "2022-01-02",
      deleted_at: null,
    },
  },
  {
    id: 8,
    user_id: 1,
    title: "やるじゃねえかサタン!!!",
    body: "おめえはホントに世界の… 救世主かもな!!!!",
    created_at: "2022-01-02",
    updated_at: "2022-01-02",
    deleted_at: null,
    user: {
      id: 1,
      name: "孫悟空",
      password: "password",
      created_at: "2022-01-02",
      updated_at: "2022-01-02",
      deleted_at: null,
    },
  },
  {
    id: 9,
    user_id: 4,
    title: "トランクス…………",
    body: "ブルマを…ママを大切にしろよ…………",
    created_at: "2022-01-02",
    updated_at: "2022-01-02",
    deleted_at: null,
    user: {
      id: 4,
      name: "ベジータ",
      password: "password",
      created_at: "2022-01-02",
      updated_at: "2022-01-02",
      deleted_at: null,
    },
  },
  {
    id: 10,
    user_id: 4,
    title: "がんばれカカロット…",
    body: "おまえがナンバー1だ!!",
    created_at: "2022-01-02",
    updated_at: "2022-01-02",
    deleted_at: null,
    user: {
      id: 4,
      name: "ベジータ",
      password: "password",
      created_at: "2022-01-02",
      updated_at: "2022-01-02",
      deleted_at: null,
    },
  },
];

export const HomeModal: React.FC = () => {
  const { handleOnTapPost } = useHomeModal();

  return (
    <Sidebar>
      <VStack direction="column" divider={<Divider />} display={"inline-block"}>
        {posts.map((post) => (
          <PostDetail key={post.id} post={post} onClick={() => {
            handleOnTapPost(post.id.toString())
          }
          } />
        ))}
      </VStack>
    </Sidebar>
  );
};
