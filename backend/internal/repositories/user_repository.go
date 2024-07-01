// ripository層は、DBアクセスを行う層で、DBアクセスを行うメソッドを定義する
// 基本的にentity層にアクセスし、usecase層にデータを返す
package repositories

import (
	"errors"
	"myapp/internal/entities"
	"myapp/internal/external"

	"gorm.io/gorm"
)

type UserRepository struct {
	Conn *gorm.DB
}

func NewUserRepository() *UserRepository {
	return &UserRepository{
		Conn: external.GetDB(),
	}
}

func (r *UserRepository) Create(body entities.CreateUserBody) (*entities.User, error) {
	var user *entities.User

	result := r.Conn.Create(&entities.User{
		Username:    *body.Username,
		DisplayName: *body.DisplayName,
		Password:    *body.Password,
	}).Scan(&user)

	if result.Error != nil {
		if errors.Is(result.Error, gorm.ErrRecordNotFound) {
			return nil, nil
		}
		return nil, result.Error
	}
	return user, nil
}
