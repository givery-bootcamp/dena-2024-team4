package controllers

import (
	"errors"
	openapi "myapp/internal/api"
	"myapp/internal/entities"
	"myapp/internal/usecases"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

func PutTweetDetail(ctx *gin.Context) {
	// デフォルトはString型だが、データベースはintなので変換
	tweetIdStr := ctx.Param("tweetId")
	tweetId, err := strconv.Atoi(tweetIdStr)
	if err != nil {
		handleError(ctx, 400, errors.New("invalid tweetId"))
		return
	}

	// 指定したリクエストボディの形式にバインドする
	requestBody := openapi.TweetsTweetIdPutRequest{}
	if err := ctx.ShouldBindJSON(&requestBody); err != nil {
		response400 := openapi.NewTweetsPost400Response()
		response400.SetMessage(err.Error())
		ctx.JSON(400, response400)
		return
	}
	usecase := usecases.NewUpdateTweetDetailsUsecase()

	// ユースケースを実行
	result, err := usecase.Execute(tweetId, entities.UpdatePostBody{
		Title: &requestBody.Title,
		Body:  &requestBody.Body,
	})

	if err != nil {
		handleError(ctx, 500, err)
	} else if result != nil {
		response204 := openapi.NewTweetsTweetIdPut204Response()
		response204.SetId(*result.Id)
		response204.SetUpdatedAt(*result.UpdatedAt)
		ctx.JSON(http.StatusCreated, response204)
	} else {
		handleError(ctx, 404, errors.New("not found"))
	}
}
