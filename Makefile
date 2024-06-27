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
	@echo "  cat             : Makefileの内容を表示する"
	@echo "  help            : Makefileの内容を表示する"
	@echo "  init            : プロジェクトを初期化し、バックグラウンドで実行する"
	@echo "  init/l          : プロジェクトを初期化実行する"
	@echo "  build           : compose.ymlを使用してdockerイメージをビルドする"
	@echo "  up              : docker compose upを実行する"
	@echo "  up/d            : docker compose up -dを実行する. バックグラウンドで実行する"
	@echo "  stop            : docker compose stopを実行する"
	@echo "  down/d          : docker compose downを実行する"
	@echo "  down/d/all      : docker compose down -rmi all --volumes --remove-orphansを実行する"
	@echo "  fe/login        : frontendコンテナにログインする"
	@echo "  be/login        : backendコンテナにログインする"
	@echo "  db/login        : DBコンテナにログインする"
	@echo "  db/client       : DBクライアントにログインする"
	@echo "  fe/logs         : frontendコンテナのログを表示する"
	@echo "  be/logs         : backendコンテナのログを表示する"
	@echo "  db/logs         : dbコンテナのログを表示する"
	@echo "  rebuild         : frontendとbackendのみ再起動する"
	@echo "  rebuild/fe      : frontendコンテナを再起動する"
	@echo "  rebuild/be      : backendコンテナを再起動する"
	@echo "  rebuild/db      : dbコンテナを再起動する"
	@echo "  rebuild/all     : すべてのコンテナを再起動する"
	@echo "  rebuild/all/d   : すべてのコンテナ・ボリューム・イメージを削除して再起動する"
	@echo "  rebuild/all/d/l : すべてのコンテナ・ボリューム・イメージを削除してバックグラウンドで再起動する"
	@echo "  open            : ブラウザで開く"
	@echo "  open/fe         : frontendをブラウザで開く"
	@echo "  open/be         : backendをブラウザで開く"
	@echo "  fe/fmt          : prettierを実行する"
	@echo "  fe/lint         : eslitを実行する"
	@echo "  fe/tsc          : typecheckを実行する"
	@echo "  fe/ci           : pushする前にfrontendのコードを整える"
	@echo "  be/fmt          : go fmtを実行する"
	@echo "  be/test         : go testを実行する"
	@echo "  be/ci           : pushする前にbackendのコードを整える"

# initコマンドを実行すると、プロジェクトを初期化し、バックグラウンドで実行する
.PHONY: init
init:
	${MAKE} build
	${MAKE} up/d

# init/lコマンドを実行すると、プロジェクトを初期化実行する
.PHONY: init/l
init/l:
	${MAKE} build
	${MAKE} up

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

# compose stopを実行する
.PHONY: stop
stop:
	${DOCKER_COMPOSE_IMPL} stop

# compose downを実行する
.PHONY: down/d
down/d:
	${DOCKER_COMPOSE_IMPL} down

# docker compose up -d --rmi all --volumes --remove-orphansを実行する
.PHONY: down/d/all
down/d/all:
	${DOCKER_COMPOSE_IMPL} down --rmi all --volumes --remove-orphans

# DBのデータを削除しないようにbackendとfrontendのみ再起動する
.PHONY: rebuild
rebuild:
	${MAKE} rebuild/fe
	${MAKE} rebuild/be

# frontendコンテナを再起動する
.PHONY: rebuild/fe
rebuild/fe:
	${DOCKER_COMPOSE_IMPL} up -d frontend

# backendコンテナを再起動する
.PHONY: rebuild/be
rebuild/be:
	${DOCKER_COMPOSE_IMPL} up -d backend

# dbコンテナを再起動する
.PHONY: rebuild/db
rebuild/db:
	${DOCKER_COMPOSE_IMPL} up -d db

# 全てのコンテナを再起動する
.PHONY: rebuild/all
rebuild/all:
	${MAKE} rebuild/fe
	${MAKE} rebuild/be
	${MAKE} rebuild/db

# 全てのコンテナ・ボリューム・イメージを削除して再起動する
.PHONY: rebuild/all/d
rebuild/all/d:
	${MAKE} down/d/all
	${MAKE} init
	
# 全てのコンテナ・ボリューム・イメージを削除してバックグラウンドで再起動する
.PHONY: rebuild/all/d/l
rebuild/all/d/l:
	${MAKE} down/d/all
	${MAKE} init/l

# ブラウザで開く
.PHONY: open
open:
	${MAKE} open/fe

# frontendをブラウザで開く
.PHONY: open/fe
open/fe:
	open http://localhost:3000

# backendをブラウザで開く
.PHONY: open/be
open/be:
	open http://localhost:9000

# frontendコンテナにログインする
.PHONY: fe/login
fe/login:
	${DOCKER_COMPOSE_IMPL} exec frontend /bin/sh

# backendコンテナにログインする
.PHONY: be/login
be/login:
	${DOCKER_COMPOSE_IMPL} exec backend /bin/sh

# DBコンテナにログインする
.PHONY: db/login
db/login:
	${DOCKER_COMPOSE_IMPL} exec db /bin/sh

# DBクライアントにログインする
.PHONY: db/client
db/client:
	${DOCKER_COMPOSE_IMPL} exec db mysql training

# frontendコンテナのログを表示する
.PHONY: fe/logs
fe/logs:
	${DOCKER_COMPOSE_IMPL} logs frontend

# backendコンテナのログを表示する
.PHONY: be/logs
be/logs:
	${DOCKER_COMPOSE_IMPL} logs backend

# dbコンテナのログを表示する
.PHONY: db/logs
db/logs:
	${DOCKER_COMPOSE_IMPL} logs db

## frontend
# prettierを実行する
.PHONY: fe/fmt
fe/fmt:
	@${DOCKER_COMPOSE_IMPL} exec frontend /bin/sh -c 'bun run prettier . --write'

# eslitを実行する
.PHONY: fe/lint
fe/lint:
	@${DOCKER_COMPOSE_IMPL} exec frontend /bin/sh -c 'bun run eslint src'

# typecheckを実行する
.PHONY: fe/tsc
fe/tsc:
	@${DOCKER_COMPOSE_IMPL} exec frontend /bin/sh -c 'bun run tsc --noEmit'

# pushする前にfrontendのコードを整える
.PHONY: fe/ci
fe/ci:
	${MAKE} fe/fmt
	${MAKE} fe/lint
	${MAKE} fe/tsc

## backend
# go fmtを実行する
.PHONY: be/fmt
be/fmt:
	@${DOCKER_COMPOSE_IMPL} exec backend /bin/sh -c 'gofmt -d -w .'

# golangci-lintを実行する
# .PHONY: be/lint
# be/lint:
# 	@${DOCKER_COMPOSE_IMPL} exec backend /bin/sh -c 'golangci-lint run --config .golangci.yaml'

# go testを実行する
.PHONY: be/test
be/test:
	@${DOCKER_COMPOSE_IMPL} exec backend /bin/sh -c 'go test -v ./...'

# pushする前にbackendのコードを整える
.PHONY: be/ci
be/ci:
	${MAKE} be/fmt
	${MAKE} be/test

# FrontendのAPI Modelをdocs/openapi.yamlから生成する
.PHONY: fe/gen
fe/gen:
	@${DOCKER_COMPOSE_IMPL} exec frontend /bin/sh -c 'rm -rf src/libs/aspida'
	@${DOCKER_COMPOSE_IMPL} exec frontend /bin/sh -c 'bunx openapi2aspida -i docs/openapi.yaml -o src/libs/aspida'

# BackendのAPI Modelをdocs/openapi.yamlから生成する
.PHONY: be/gen
be/gen:
	@${DOCKER_COMPOSE_IMPL} exec backend /bin/sh -c 'rm -rf internal/api'
	docker run --rm \
		-v ${PWD}:/local openapitools/openapi-generator-cli generate \
		-i /local/docs/openapi.yaml \
		-g go \
		-o /local/backend/internal/api --global-property models,supportingFiles=utils.go,modelDocs=false
		--type-mappings=integer=int,int32=int32,int64=int64,string=string,bool=bool,float=float,double=float
