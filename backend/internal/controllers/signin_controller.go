package controllers

import (
	"github.com/gin-gonic/gin"
)

func SignIn(ctx *gin.Context) {
	username := ctx.PostForm("username")
	password := ctx.PostForm("password")

	// response:
	// サインイン成功時: code=200. body=Userエンティティ
	// サインイン失敗時: code=400. bodyは任意

}
