package controllers

import (
	"errors"
	"fmt"
	"myapp/internal/repositories"
	"myapp/internal/usecases"

	"github.com/gin-gonic/gin"
)

func HelloWorld(ctx *gin.Context) {
	lang := ctx.DefaultQuery("lang", "ja")
	if err := validateHelloWorldParameters(lang); err != nil {
		handleError(ctx, 400, err)
		return
	}
	repository := repositories.NewHelloWorldRepository(DB(ctx))
	usecase := usecases.NewHelloWorldUsecase(repository)
	// router->controller->usecase->repository->DB
	result, err := usecase.Execute(lang)
	if err != nil {
		handleError(ctx, 500, err)
	} else if result != nil {
		ctx.JSON(200, result)
	} else {
		handleError(ctx, 404, errors.New("not found"))
	}
}

func validateHelloWorldParameters(lang string) error {
	if len(lang) != 2 {
		return errors.New(fmt.Sprintf("invalid lang parameter: %s", lang))
	}
	return nil
}
