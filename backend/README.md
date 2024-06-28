# APIの作り方

1. ### APIスキーマを定義

`docs/openapi.yaml`に追加するエンドポイント、メソッド、パラメーター、レスポンス等を追記する

2. ### BackendのAPIスキーマを生成

`make be/gen`を打って、BackendのAPIスキーマを自動生成する
`backend/internal/api`に新たなスキーマが追加されたのを確認する

3. ### APIを生やして作成する

今まで通りrouter.go -> controller.go ...のように処理を記述する

4. ### APIスキーマを使ってレスポンスを定義する

`backend/internal/api`にある該当するスキーマファイル（`model__hello_get_200_response.go`など）を参照して、レスポンスのパースを行う
