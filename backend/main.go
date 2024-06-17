package main

import (
	"fmt"
	"myapp/internal/config"
	"myapp/internal/external"
	"myapp/internal/middleware"

	"github.com/gin-gonic/gin"
)

func main() {
	// Initialize database
	external.SetupDB()

	// Setup webserver
	app := gin.Default()              // Ginのセットアップ
	app.Use(middleware.Transaction()) // DB
	app.Use(middleware.Cors())        // クロスオリジンの設定
	middleware.SetupRoutes(app)       // ルーティングの設定(エンドポイントの設定)
	app.Run(fmt.Sprintf("%s:%d", config.HostName, config.Port))
}
