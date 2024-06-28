package controllers

import (
	openapi "myapp/internal/api"
	"net/http"

	"github.com/gin-gonic/gin"
)

/*
	AuthStatus コントローラは認証状態を返す
	認証できていない場合は、401をmiddleware/auth.goで返す
	AuthStatusが実行されるということは、認証済みであることが保証されているため200を返す
*/

func AuthStatus(ctx *gin.Context) {
	response200 := openapi.NewStatusGet200Response()
	response200.SetStatus("Authenticated")
	ctx.JSON(http.StatusOK, response200)
}
