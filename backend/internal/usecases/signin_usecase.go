package usecases

import (
	"myapp/internal/entities"
	"myapp/internal/repositories"
	"time"

	"github.com/dgrijalva/jwt-go"
)

type SignInUsecase struct {
	repository repositories.SignInRepository
}

func NewSignInUsecase() *SignInUsecase {
	r := repositories.NewSignInRepository()

	return &SignInUsecase{
		repository: *r,
	}
}

func (u *SignInUsecase) Execute(username, password string) (*entities.User, string, error) {
	user, err := u.repository.SignIn(username, password)
	if err != nil {
		return nil, "", err
	}

	// JWTトークンを生成
	jwt, err := generateJWTToken(user.Id)
	if err != nil {
		return nil, "", err
	}

	return user, jwt, nil
}

func generateJWTToken(ID int) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"id":  ID,
		"exp": time.Now().Add(time.Hour * 72).Unix(), // トークンの有効期限を設定
	})

	// 秘密鍵で署名を行い、トークン文字列を取得。トークンは認証で使用する
	tokenString, err := token.SignedString([]byte("secret-key"))
	if err != nil {
		return "", err
	}

	return tokenString, nil
}
