// internal/controllers/user.go
package controllers

import (
	"myapp/internal/usecases"
	"net/http"

	"github.com/gin-gonic/gin"
)

// GetUser コントローラはログインしているユーザー情報を返します
func AuthUser(ctx *gin.Context) {
	userID, exists := ctx.Get("userID")
	if !exists {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}

	usecase := usecases.NewAuthUserUsecase()
	user, err := usecase.Execute(userID.(int))
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Internal Server Error"})
		return
	}

	ctx.JSON(http.StatusOK, user)
}
