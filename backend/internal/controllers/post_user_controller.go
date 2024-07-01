package controllers

import (
	"errors"
	openapi "myapp/internal/api"
	"myapp/internal/entities"
	"myapp/internal/usecases"
	"net/http"

	"github.com/gin-gonic/gin"
)

func PostUser(ctx *gin.Context) {
	// 指定したリクエストボディの形式にバインドする
	requestBody := openapi.UserPostRequest{}
	if err := ctx.ShouldBindJSON(&requestBody); err != nil {
		response400 := openapi.NewTweetsPost400Response()
		response400.SetMessage(err.Error())
		ctx.JSON(400, response400)
		return
	}
	usecase := usecases.NewCreateUserUsecase()

	// ユースケースを実行
	result, err := usecase.Execute(entities.CreateUserBody{
		Username:    &requestBody.Username,
		DisplayName: &requestBody.DisplayName,
		Password:    &requestBody.Password,
	})

	if err != nil {
		handleError(ctx, http.StatusInternalServerError, err)
	} else if result != nil {
		ctx.JSON(http.StatusCreated, gin.H{
			"id": result.Id,
		})
	} else {
		handleError(ctx, http.StatusNotFound, errors.New("not found"))
	}
}
