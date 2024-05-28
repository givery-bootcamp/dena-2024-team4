package controllers

import (
	"errors"
	"myapp/internal/repositories"
	"myapp/internal/usecases"

	"github.com/gin-gonic/gin"
)

func AllTweets(ctx *gin.Context) {
	// repositoryをここにおかない方がいい問題は後で解消したい
	repository := repositories.NewAllTweetsRepository(DB(ctx))
	usecase := usecases.NewAllTweetsUsecase(repository)

	result, err := usecase.Execute()
	if err != nil {
		handleError(ctx, 500, err)
	} else if result != nil {
		ctx.JSON(200, result)
	} else {
		handleError(ctx, 404, errors.New("Not found"))
	}
}
