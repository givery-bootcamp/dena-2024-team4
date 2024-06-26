// internal/controllers/user.go
package controllers

import (
	openapi "myapp/internal/api"
	"myapp/internal/usecases"
	"net/http"

	"github.com/gin-gonic/gin"
)

// GetUser コントローラはログインしているユーザー情報を返します
func AuthUser(ctx *gin.Context) {
	userID, exists := ctx.Get("userID")
	if !exists {
		respose401 := openapi.NewUserGet401Response()
		respose401.SetMessage("Unauthorized")
		ctx.JSON(http.StatusUnauthorized, respose401)
		return
	}

	usecase := usecases.NewAuthUserUsecase()
	result, err := usecase.Execute(userID.(int))
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Internal Server Error"})
		return
	}

	response200 := openapi.NewUserGet200Response()
	response200.SetId(int32(result.ID))
	response200.SetUsername(result.Username)
	response200.SetDisplayName(result.DisplayName)

	ctx.JSON(http.StatusOK, response200)
}
