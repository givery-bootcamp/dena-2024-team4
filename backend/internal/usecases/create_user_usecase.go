// usecase層はビジネスロジックを定義する
// usecase層は基本的にrepository層にアクセスし、controller層にデータを返す
package usecases

import (
	"myapp/internal/entities"
	"myapp/internal/interfaces"
	"myapp/internal/repositories"
)

type CreateUserUsecase struct {
	repository interfaces.UserRepository
}

// Newをつけたメソッドを定義してConstructorを生成
func NewCreateUserUsecase() *CreateUserUsecase {
	r := repositories.NewUserRepository()

	return &CreateUserUsecase{
		repository: r,
	}
}

func (u *CreateUserUsecase) Execute(body entities.CreateUserBody) (*entities.User, error) {
	return u.repository.Create(body)
}
