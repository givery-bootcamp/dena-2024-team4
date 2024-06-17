package controllers

import (
	"errors"
	"myapp/internal/usecases"

	"github.com/gin-gonic/gin"
	"strconv"
)

func AllTweets(ctx *gin.Context) {
	// クエリパラメータからoffsetとlimitを取得
	offsetStr := ctx.Query("offset")
	limitStr := ctx.Query("limit")

	// 文字列を整数に変換（エラー処理は省略）
	offset, _ := strconv.Atoi(offsetStr)
	limit, _ := strconv.Atoi(limitStr)

	usecase := usecases.NewAllTweetsUsecase(offset, limit)

	result, err := usecase.Execute(offset, limit)
	if err != nil {
		handleError(ctx, 500, err)
	} else if result != nil {
		ctx.JSON(200, result)
	} else {
		handleError(ctx, 404, errors.New("not found"))
	}
}
