// main.go
package main

import (
	"fmt"
	"myapp/internal/config"
	"myapp/internal/external"
	"myapp/internal/middleware"

	"github.com/gin-gonic/gin"
)

func main() {
	// DBの初期化
	external.InitializeDB()

	// ルーターのセットアップ
	app := gin.Default()
	app.Use(middleware.Transaction())
	app.Use(middleware.Cors())
	middleware.SetupRoutes(app)

	// サーバーの起動
	if err := app.Run(fmt.Sprintf("%s:%d", config.HostName, config.Port)); err != nil {
		fmt.Printf("Failed to start server: %v", err)
	}
}
