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

	// usernameとpasswordを受けとり、サインインする
	app.POST("/signin", controllers.SignIn)

	// 認証が必要なエンドポイント
	auth := app.Group("/")
	auth.Use(AuthRequired())
	{
		auth.GET("/user", controllers.AuthUser)
	}

	// AllTweets の関数を直接呼び出す
	app.GET("/tweets", controllers.AllTweets)
	app.POST("/tweets", controllers.PostTweetDetail)        // ツイートを投稿
	app.GET("/tweets/:tweetId", controllers.TweetDetail)    // tweetIdでツイートの詳細を取得
	app.PUT("/tweets/:tweetId", controllers.PutTweetDetail) // ツイートを更新
}
