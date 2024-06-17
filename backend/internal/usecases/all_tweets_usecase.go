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
func NewAllTweetsUsecase(offset int, limit int) *AllTweetsUsecase {
	r := repositories.NewAllTweetsRepository(offset, limit)

	return &AllTweetsUsecase{
		repository: r,
	}
}

// AllTweetsUsecaseクラスのメソッド定義みたいなもの
func (u *AllTweetsUsecase) Execute(offset int, limit int) ([]*entities.Post, error) {
	return u.repository.GetAll(offset, limit)
}
