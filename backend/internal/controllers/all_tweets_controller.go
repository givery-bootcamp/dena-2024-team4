package controllers

import (
	"errors"
	openapi "myapp/internal/api"
	"myapp/internal/usecases"
	"strconv"

	"github.com/gin-gonic/gin"
)

func AllTweets(ctx *gin.Context) {
	// クエリパラメータからoffsetとlimitを取得
	offsetStr := ctx.Query("offset")
	limitStr := ctx.Query("limit")

	// 文字列を整数に変換（エラー処理は省略）
	var offset int = 0 // デフォルト値を0
	var limit int = 50 // デフォルト値を50
	var err error

	response400 := openapi.NewTweetsGet400Response()

	// offsetのクエリパラメータが存在するか確認
	if offsetStr != "" {
		offset, err = strconv.Atoi(offsetStr)
		response400.SetMessage("offset is invalid")
		if err != nil {
			ctx.JSON(400, response400)
			return
		}
	}

	// limitのクエリパラメータが存在するか確認
	if limitStr != "" {
		limit, err = strconv.Atoi(limitStr)
		response400.SetMessage("limit is invalid")
		if err != nil {
			ctx.JSON(400, response400)
			return
		}
	}

	usecase := usecases.NewAllTweetsUsecase()

	result, err := usecase.Execute(offset, limit)
	if err != nil {
		handleError(ctx, 500, err)
	} else if result != nil {
		ctx.JSON(200, result)
	} else {
		handleError(ctx, 404, errors.New("not found"))
	}
}
