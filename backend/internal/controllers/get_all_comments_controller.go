package controllers

import (
	"net/http"
	"strconv"

	openapi "myapp/internal/api"
	"myapp/internal/entities"
	"myapp/internal/usecases"

	"github.com/gin-gonic/gin"
)

// GetAllComments はコメント一覧を取得する
func GetAllComments(ctx *gin.Context) {
	response404 := openapi.NewError404Response()
	response500 := openapi.NewError500Response()

	// クエリパラメータからlimit, offset, postId, sortを取得
	limitStr := ctx.Query("limit")
	offsetStr := ctx.Query("offset")
	postIdStr := ctx.Query("post_id")
	sort := ctx.Query("sort")

	// デフォルト値を設定
	limit := 50
	offset := 0
	var postId *int

	// limitのクエリパラメータが存在するか確認
	if limitStr != "" {
		l, err := strconv.Atoi(limitStr)
		if err != nil || l <= 0 {
			ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid limit parameter"})
			return
		}
		limit = l
	}

	// offsetのクエリパラメータが存在するか確認
	if offsetStr != "" {
		o, err := strconv.Atoi(offsetStr)
		if err != nil || o < 0 {
			ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid offset parameter"})
			return
		}
		offset = o
	}

	// postIdのクエリパラメータが存在するか確認
	if postIdStr != "" {
		id, err := strconv.Atoi(postIdStr)
		if err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid post_id parameter"})
			return
		}
		postId = &id
	}

	// sortパラメータのバリデーション
	if sort != "" && sort != "created_at" && sort != "created_at:asc" && sort != "created_at:desc" {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid sort parameter"})
		return
	}
	usecase := usecases.NewGetAllCommentsUsecase()

	result, err := usecase.Execute(entities.GetAllCommentsRequestParameter{
		Limit:  limit,
		Offset: offset,
		PostId: postId,
		Sort:   sort,
	})

	if err != nil {
		response500.SetMessage("Internal Server Error")
		ctx.JSON(http.StatusInternalServerError, response500)
	} else if result != nil {
		if len(result) == 0 {
			response404.SetMessage("Not Found")
			ctx.JSON(http.StatusNotFound, response404)
		} else {
			ctx.JSON(http.StatusOK, result)
		}
	} else {
		response404.SetMessage("Not Found")
		ctx.JSON(http.StatusNotFound, response404)
	}
}
