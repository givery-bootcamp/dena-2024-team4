package controllers

import (
	"github.com/gin-gonic/gin"
)

func SignIn(ctx *gin.Context) {
	usecase := usecases.NewSignInUsecase()
	username := ctx.PostForm("username")
	password := ctx.PostForm("password")

	// response:
	// サインイン成功時: code=200. body=Userエンティティ
	// サインイン失敗時: code=400. bodyは任意
	result, err := usecase.Execute(username, password)
	if err != nil {
		handleError(ctx, 400, err)
	} else {
		ctx.JSON(200, result)
	}

	// [TODO] Cookie
}
