// usecase層はビジネスロジックを定義する
// usecase層は基本的にrepository層にアクセスし、controller層にデータを返す
package usecases

import (
	"myapp/internal/entities"
	"myapp/internal/interfaces"
	"myapp/internal/repositories"
)

type AllTweetsUsecase struct {
	repository interfaces.AllTweetsRepository
}

// Newをつけたメソッドを定義してConstructorを生成
func NewAllTweetsUsecase() *AllTweetsUsecase {
	r := repositories.NewAllTweetsRepository()

	return &AllTweetsUsecase{
		repository: r,
	}
}

// AllTweetsUsecaseクラスのメソッド定義みたいなもの
func (u *AllTweetsUsecase) Execute() ([]*entities.Post, error) {
	return u.repository.GetAll()
}
