package controllers

import (
	"errors"
	"myapp/internal/entities"
	"myapp/internal/usecases"
	"net/http"

	"github.com/gin-gonic/gin"
)

func PostTweetDetail(ctx *gin.Context) {
	// 指定したリクエストボディの形式にバインドする
	requestBody := entities.CreatePostBody{}
	if err := ctx.ShouldBindJSON(&requestBody); err != nil {
		handleError(ctx, 400, errors.New("failed to parse request body"))
		return
	}
	usecase := usecases.NewCreateTweetDetailsUsecase()

	// ユースケースを実行
	result, err := usecase.Execute(requestBody)

	if err != nil {
		handleError(ctx, 500, err)
	} else if result != nil {
		ctx.JSON(http.StatusCreated, gin.H{"id": result.ID, "created_at": result.CreatedAt})
	} else {
		handleError(ctx, 404, errors.New("not found"))
	}
}
