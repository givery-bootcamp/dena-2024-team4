package controllers

import (
	"errors"
	"myapp/internal/usecases"
	"strconv"

	"github.com/gin-gonic/gin"
)

func TweetDetail(ctx *gin.Context) {
	// デフォルトはString型だが、データベースはintなので変換
	tweetIdStr := ctx.Param("tweetId")
	tweetId, err := strconv.Atoi(tweetIdStr)
	if err != nil {
		handleError(ctx, 400, errors.New("Invalid tweetId"))
		return
	}
	usecase := usecases.NewTweetDetailUsecase()

	result, err := usecase.Execute(tweetId)
	if err != nil {
		handleError(ctx, 500, err)
	} else if result != nil {
		ctx.JSON(200, result)
	} else {
		handleError(ctx, 404, errors.New("Not found"))
	}
}
