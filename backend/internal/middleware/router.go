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
		auth.GET("/status", controllers.AuthStatus)              // 認証が通っているか確認
		auth.GET("/user", controllers.AuthUser)                  // ログイン中のユーザー情報を取得
		auth.GET("/tweets", controllers.AllTweets)               // AllTweets の関数を直接呼び出す
		auth.POST("/tweets", controllers.PostTweetDetail)        // ツイートを投稿
		auth.GET("/tweets/:tweetId", controllers.TweetDetail)    // tweetIdでツイートの詳細を取得
		auth.PUT("/tweets/:tweetId", controllers.PutTweetDetail) // ツイートを更新
		auth.DELETE("/tweets/:tweetId", controllers.TweetDelete) // ツイートを削除
	}
}
