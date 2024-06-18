FRONTEND_DIR := frontend
BACKEND_DIR := backend

DOCKER_COMPOSE_VERSION_CHECKER := $(shell docker compose > /dev/null 2>&1 ; echo $$?)
ifeq ($(DOCKER_COMPOSE_VERSION_CHECKER), 0)
DOCKER_COMPOSE_IMPL=docker compose
else
DOCKER_COMPOSE_IMPL=docker-compose
endif

# catコマンドを使ってMakefileの内容を表示する
.PHONY: cat
cat:
	cat Makefile

# helpコマンドを実行すると、Makefileの内容を表示する
.PHONY: help
help:
	@echo "利用可能なコマンド:"
	@echo "  cat       : Makefileの内容を表示する"
	@echo "  init      : プロジェクトを初期化し、環境変数を設定する"
	@echo "  build     : compose.ymlを使用してDockerイメージをビルドする"
	@echo "  up        : docker-compose upを実行する"
	@echo "  up/d      : バックグラウンドでdocker-compose upを実行する"
	@echo "  run       : ねこはしボットを起動する"
	@echo "  run/hotreload : ホットリロードありでねこはしボットを起動する"
	@echo "  run/normal : ホットリロードなしでねこはしボットを起動する"
	@echo "  down/d    : docker-compose downを実行する"
	@echo "  rebuild   : DBデータを削除せずにslackappコンテナを再ビルドする"
	@echo "  rebuild/slackapp : slackappコンテナを再ビルドする"
	@echo "  rebuild/all : すべてのコンテナを再ビルドする"
	@echo "  fmt       : go fmtを実行する"
	@echo "  lint      : golangci-lintを実行する"
	@echo "  slackapp/login : slackappコンテナにログインする"
	@echo "  slackapp/logs  : slackappコンテナのログを表示する"
	@echo "  ci        : pushする前にコードを整える"

# initコマンドを実行すると、プロジェクトを初期化する
.PHONY: init
init:
	${MAKE} build
	${MAKE} up/d

# compose.ymlを使用して、docker imageをビルドする
.PHONY: build
build:
	${DOCKER_COMPOSE_IMPL} build

# docker compose upを実行する
.PHONY: up
up:
	${DOCKER_COMPOSE_IMPL} up

# docker compose up -dを実行する. バックグラウンドで実行する
.PHONY: up/d
up/d:
	${DOCKER_COMPOSE_IMPL} up -d

# ねこはしbotを起動する（デフォルトコマンド）
# run/hotreloadを実行する（ホットリロードあり
.PHONY: run
run:
	${MAKE} run/hotreload

# ねこはしbotを起動する（ホットリロードあり）
# go mod tidyを実行して、依存関係を解決する
# go buildを実行して、ねこはしbotをビルドする
# ねこはしbotを実行する
.PHONY: run/hotreload
run/hotreload:
	${DOCKER_COMPOSE_IMPL} exec slackapp /bin/sh -c 'cd slackapp && go mod tidy && go build . && air -c .air.toml'

# ねこはしbotを起動する（ホットリロードなし）
# go mod tidyを実行して、依存関係を解決する
# go buildを実行して、ねこはしbotをビルドする
# ねこはしbotを実行する
.PHONY: run/normal
run/normal:
	${DOCKER_COMPOSE_IMPL} exec slackapp /bin/sh -c 'cd slackapp && go mod tidy && go build && ./nekohashi_bot'

# compose downを実行する
.PHONY: down/d
down/d:
	${DOCKER_COMPOSE_IMPL} down

# nekohashiコンテナにログインする
.PHONY: slackapp/login
slackapp/login:
	${DOCKER_COMPOSE_IMPL} exec slackapp /bin/sh

# nekoahshiコンテナのログを表示する
.PHONY: slackapp/logs
slackapp/logs:
	${DOCKER_COMPOSE_IMPL} logs slackapp

# DBのデータを削除しないようにnekohashiのみ再起動する
.PHONY: rebuild
rebuild:
	${MAKE} rebuild/slackapp

# nekohashiコンテナを再起動する
.PHONY: rebuild/slackapp
rebuild/slackapp:
	${DOCKER_COMPOSE_IMPL} build slackapp
	${DOCKER_COMPOSE_IMPL} up -d slackapp

# 全てのコンテナを再起動する
.PHONY: rebuild/all
rebuild/all:
	${MAKE} rebuild/slackapp

# go fmtを実行する
.PHONY: fmt
fmt:
	@${DOCKER_COMPOSE_IMPL} exec slackapp /bin/sh -c 'gofmt -d -w .'

# golangci-lintを実行する
.PHONY: lint
lint:
	@${DOCKER_COMPOSE_IMPL} exec slackapp /bin/sh -c 'cd slackapp && golangci-lint run --config .golangci.yaml'

# pushする前にコードを整える
.PHONY: ci
ci:
	${MAKE} fmt
	${MAKE} lint