package middleware

import (
	"myapp/internal/controllers"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(app *gin.Engine) {
	app.GET("/", func(ctx *gin.Context) {
		ctx.String(200, "It works")
	})
	app.GET("/hello", controllers.HelloWorld)
	app.GET("/tweets", controllers.AllTweets)
	app.GET("/tweets/:tweetId", controllers.TweetDetail) // tweetIdでツイートの詳細を取得
}

// フロントエンドから叩くやつの設定
