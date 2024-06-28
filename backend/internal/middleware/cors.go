package middleware

import (
	myConfig "myapp/internal/config"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func Cors() gin.HandlerFunc {
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{
		myConfig.CorsAllowOrigin,
		myConfig.CorsAllowOriginSwagger,
		myConfig.CorsAllowOriginProdFrontend,
	}
	config.AllowCredentials = true
	return cors.New(config)
}
