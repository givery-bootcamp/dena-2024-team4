package controllers

import (
	"errors"
	"fmt"
	openapi "myapp/internal/api"
	"myapp/internal/repositories"
	"myapp/internal/usecases"

	"github.com/gin-gonic/gin"
)

func HelloWorld(ctx *gin.Context) {
	lang := ctx.DefaultQuery("lang", "ja")
	if err := validateHelloWorldParameters(lang); err != nil {
		response400 := openapi.NewHelloGet400Response()
		response400.SetMessage(err.Error())
		ctx.JSON(400, response400)
		return
	}

	repository := repositories.NewHelloWorldRepository()
	usecase := usecases.NewHelloWorldUsecase(repository)
	// router->controller->usecase->repository->DB
	result, err := usecase.Execute(lang)
	if err != nil {
		response500 := openapi.NewError500Response()
		response500.SetMessage(err.Error())
		ctx.JSON(500, response500)
	} else if result != nil {
		response200 := openapi.NewHelloGet200Response()
		response200.SetMessage(result.Message)
		ctx.JSON(200, response200)
	} else {
		response404 := openapi.NewError404Response()
		response404.SetMessage("not found")
		ctx.JSON(404, response404)
	}
}

func validateHelloWorldParameters(lang string) error {
	if len(lang) != 2 {
		return errors.New(fmt.Sprintf("invalid lang parameter: %s", lang))
	}
	return nil
}
