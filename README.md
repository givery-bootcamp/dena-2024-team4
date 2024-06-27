# Training app 2024

## 開発方法

### 初期セットアップ

#### 1. リポジトリのクローン

リポジトリをgit cloneします。

```sh 
git clone git@github.com:givery-bootcamp/dena-2024-team4.git
```

#### 2. 初期セットアップ

ディレクトリに移動し、以下のコマンドを実行します。

```sh
cd dena-2024-team4
make init
```

成功すると以下のURLでWebサーバが起動します。

- backend: `http://localhost:9000`
- frontend: `http://localhost:3000`

アクセスするには以下のコマンドを実行します。

```sh
make open
make open/be
```

#### 3. 環境の再起動

基本的にホットリロードが効いていますが、意図的に環境を再起動したい場合は以下を実行してください。

```sh
make rebuild
```

注意: 上記のコマンドはDBのデータを守るためDBコンテナは再起動対象ではありません。DBコンテナも含めて再起動する場合は以下のコマンドを実行してください。

```sh
make rebuild/all
```

全ての環境を完全に再構築するためには以下のコマンドを実行してください。ただしこのコマンドは全てのdocker上の環境が初期化されるため気をつけてください

```sh
make rebuild/all/d
```

### makeコマンドの使い方

makeコマンドについては以下を実行するとコマンド一覧が表示されます

```sh
make help
```

### React for dev

React を開発する人はブラウザの拡張機能をインストールしてください。(任意)

- React Developer Tools
- Redux DevTools

## Databaseへのクライアント接続方法

```sh
make db/client
```

## それぞれの環境への接続方法

```sh
make fe/login
make be/login
make db/login
```

ライブラリをインストールする場合は docker コンテナ側でコマンドを実行してください。

e.g.

```sh
make fe/login
npm install something
```


```sh
make be/login
go get -u gorm.io/gorm
```

VS Code などで開発する場合、コンテナ側にインストールされたモジュールが参照できないために、エディター上でエラーが表示される場合があります。

その場合はお手数ですが、ホスト OS 側でもモジュールのインストールをお願いします。

```sh
cd frontend
npm install
```

[frontend(nodejs)を Docker 外で動かすための設定変更](https://github.com/givery-technology/training-app-2023/wiki/Docker%E3%81%AE%E4%B8%AD%E3%81%AENode%E4%BD%BF%E3%81%86%E3%81%AE%E3%81%84%E3%82%84%E3%81%A0%E3%81%A8%E6%80%9D%E3%81%A3%E3%81%9F%E4%BA%BA%E5%90%91%E3%81%91%E3%81%AE%E8%84%B1%E7%8D%84%E3%81%AE%E6%89%8B%E5%BC%95%E3%81%8D)

## ディレクトリ構成

### Frontend

```
frontend/
  index.html
  public/
    画像などの静的ファイル
  src/
    main.tsx: Reactアプリケーションが起動するエントリーポイント
    app/
      機能横断的に使う機能をまとめる
    features/
      post/
        ドメインごとの機能をまとめる
    shared/
      components/
        再利用可能な小さなUIコンポーネント
      services/
        共有関数
      hooks/
        共有React Hook
      models/
        共有Model
      store/
        Redux Store関連
```

### Backend

```
backend/
  internal/ : ソースコード
    config/ : 設定類
    entities/ : モデル/エンティティ
    external/ : 外部環境との接続定義
    interfaces/ : インターフェース
    middleware/ : ginのmiddleware
    repositories/ : リポジトリ - systemに近い部分の実装
    usecases/ : ユースケース - ビジネスに近い部分の実装
```

## リンク集
- [本プロジェクトのリンク集](https://github.com/givery-bootcamp/dena-2024-team4/wiki)

## docker-compose structure

- backend:
  - go: 1.22
  - air: 1.51.0
    - https://github.com/cosmtrek/air
- frontend:
  - node:20.12.2
  - react: 18
    - https://reactjs.org/docs/getting-started.html
  - @reduxjs/toolkit: 1.9
    - https://redux-toolkit.js.org/introduction/getting-started
  - react-redux: 8
    - https://react-redux.js.org/introduction/getting-started
  - react-router-dom: 6
    - https://v5.reactrouter.com/web/guides/philosophy
  - bootstrap: 5
    - https://getbootstrap.com/docs/5.1/getting-started/introduction/
  - classnames: 2.3
    - https://github.com/JedWatson/classnames
  - typescript: 5
    - https://www.typescriptlang.org/docs/
- db:
  - mysql: 8.3
