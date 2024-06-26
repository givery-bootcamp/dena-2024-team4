package controllers

import (
	"errors"
	openapi "myapp/internal/api"
	"myapp/internal/entities"
	"myapp/internal/usecases"
	"net/http"

	"github.com/gin-gonic/gin"
)

func PostTweetDetail(ctx *gin.Context) {
	// 指定したリクエストボディの形式にバインドする
	requestBody := openapi.TweetsPostRequest{}
	if err := ctx.ShouldBindJSON(&requestBody); err != nil {
		response400 := openapi.NewTweetsPost400Response()
		response400.SetMessage(err.Error())
		ctx.JSON(400, response400)
		return
	}
	usecase := usecases.NewCreateTweetDetailsUsecase()

	// ユースケースを実行
	result, err := usecase.Execute(entities.CreatePostBody{
		UserId: &requestBody.UserId,
		Title:  &requestBody.Title,
		Body:   &requestBody.Body,
	})

	if err != nil {
		handleError(ctx, 500, err)
	} else if result != nil {
		response201 := openapi.NewTweetsPost201Response()
		response201.SetCreatedAt(*result.CreatedAt)
		response201.SetId(*result.Id)
		ctx.JSON(http.StatusCreated, response201)
	} else {
		handleError(ctx, 404, errors.New("not found"))
	}
}
