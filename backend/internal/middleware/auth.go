// internal/middleware/auth.go
package middleware

import (
	"fmt"
	"net/http"
	"os"
	"strings"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

// AuthRequired ミドルウェアはJWTトークンの検証を行います
func AuthRequired() gin.HandlerFunc {
	secretKey := os.Getenv("JWT_SECRET")
	return func(ctx *gin.Context) {
		cookieHeader := ctx.GetHeader("Cookie")
		tokenString := extractTokenFromCookie(cookieHeader)

		fmt.Println(cookieHeader)

		if tokenString == "" {
			ctx.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
			ctx.Abort()
			return
		}

		token, parseErr := jwt.ParseWithClaims(tokenString, &jwt.MapClaims{}, func(token *jwt.Token) (interface{}, error) {
			return []byte(secretKey), nil
		})

		if parseErr != nil {
			if parseErr.Error() == "token contains an invalid number of segments" {
				ctx.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
			} else {
				ctx.JSON(http.StatusInternalServerError, gin.H{"error": parseErr.Error()})
			}
			ctx.Abort()
			return
		}

		if claims, ok := token.Claims.(*jwt.MapClaims); ok && token.Valid {
			ctx.Set("userID", int((*claims)["id"].(float64)))
			ctx.Next()
		} else {
			ctx.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
			ctx.Abort()
		}
	}
}

// extractTokenFromCookie クッキーヘッダーからJWTトークンを抽出します
func extractTokenFromCookie(cookieHeader string) string {
	cookies := strings.Split(cookieHeader, "; ")
	for _, cookie := range cookies {
		if strings.HasPrefix(cookie, "jwt=") {
			return strings.TrimPrefix(cookie, "jwt=")
		}
	}
	return ""
}
