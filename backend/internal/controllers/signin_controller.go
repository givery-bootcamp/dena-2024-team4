package controllers

import (
	"myapp/internal/usecases"

	"github.com/gin-gonic/gin"
)

func SignIn(ctx *gin.Context) {
	usecase := usecases.NewSignInUsecase()
	username := ctx.PostForm("username")
	password := ctx.PostForm("password")

	// response:
	// サインイン成功時: code=200. body=Userエンティティ
	// サインイン失敗時: code=400. bodyは任意
	user, jwt, err := usecase.Execute(username, password)
	if err != nil {
		// サインイン失敗
		handleError(ctx, 400, err)
		return
	}

	// JWTをCookieに設定。とりあえず期限は24時間
	// クライアント側のCookieに保存される
	// 以降、認証が必要なEndpointではこのCookieをチェックして、不正な場合は401を返す
	ctx.SetCookie("jwt", jwt, 60*60*24, "/", "localhost", true, false)

	// サインイン成功
	ctx.JSON(200, user)
}
