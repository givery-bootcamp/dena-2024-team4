package middleware

import (
	"myapp/internal/controllers"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(app *gin.Engine) {
	app.GET("/", func(ctx *gin.Context) {
		ctx.String(200, "It works")
	})
	// HelloWorld が DB 接続を必要としない場合はそのまま
	app.GET("/hello", controllers.HelloWorld)
	// AllTweets の関数を直接呼び出す
	app.GET("/tweets", controllers.AllTweets)

	// usernameとpasswordを受けとり、サインインする
	app.POST("/signin", controllers.SignIn)

	// tweetIdでツイートの詳細を取得
	app.GET("/tweets/:tweetId", controllers.TweetDetail)
}
