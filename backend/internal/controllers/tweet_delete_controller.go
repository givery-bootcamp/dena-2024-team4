package controllers

import (
	"errors"
	"myapp/internal/usecases"
	"strconv"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func TweetDelete(ctx *gin.Context) {

	tweetIdStr := ctx.Param("tweetId")
	tweetId, err := strconv.Atoi(tweetIdStr)
	if err != nil {
		handleError(ctx, 400, errors.New("invalid tweetId"))
		return
	}

	usecase := usecases.NewTweetDeleteUsecase()
	err = usecase.Execute(tweetId)

	if errors.Is(err, gorm.ErrRecordNotFound) {
		handleError(ctx, 404, errors.New("not found"))
	} else if err != nil && err.Error() == "already deleted" {
		handleError(ctx, 404, errors.New("already deleted"))
	} else if err != nil {
		handleError(ctx, 500, err)
	} else {
		handleError(ctx, 200, errors.New("Tweet deleted successfully"))
	}
}
