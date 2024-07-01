package controllers

import (
	openapi "myapp/internal/api"
	"myapp/internal/usecases"
	"net/http"

	"github.com/gin-gonic/gin"
)

func SignIn(ctx *gin.Context) {
	usecase := usecases.NewSignInUsecase()

	request := openapi.NewSigninPostRequest()
	response404 := openapi.NewError404Response()

	if err := ctx.ShouldBindJSON(request); err != nil {
		response404.SetMessage("failed to parse request body")
		ctx.JSON(http.StatusBadRequest, response404)
		return
	}

	// response:
	// サインイン成功時: code=200. body=Userエンティティ
	// サインイン失敗時: code=400. bodyは任意
	user, jwt, err := usecase.Execute(*request.Username, *request.Password)
	if err != nil {
		// サインイン失敗
		response404.SetMessage(err.Error())
		ctx.JSON(http.StatusBadRequest, response404)
		return
	}

	ctx.SetSameSite(http.SameSiteStrictMode)

	// JWTをCookieに設定。とりあえず期限は24時間
	// クライアント側のCookieに保存される
	// 以降、認証が必要なEndpointではこのCookieをチェックして、不正な場合は401を返す
	ctx.SetCookie("jwt", jwt, 60*60*24, "/", "track-bootcamp.run", true, false)

	// サインイン成功
	response200 := openapi.NewSigninPost200Response()
	response200.SetUser(openapi.User{Id: user.Id, Username: user.Username, DisplayName: user.DisplayName})
	ctx.JSON(http.StatusOK, response200)
}
