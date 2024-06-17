// transaction.go
package middleware

import (
	"myapp/internal/external"

	"github.com/gin-gonic/gin"
)

func Transaction() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		db := external.GetDB() // グローバルなデータベース接続を取得
		txn := db.Begin()
		defer func() {
			if 400 <= ctx.Writer.Status() {
				txn.Rollback()
			} else {
				txn.Commit()
			}
		}()
		ctx.Set("db", txn)
		ctx.Next()
	}
}
