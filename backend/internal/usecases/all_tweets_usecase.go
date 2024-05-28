package usecases

import (
	"myapp/internal/entities"
	"myapp/internal/interfaces"
)

type AllTweetsUsecase struct {
	repository interfaces.AllTweetsRepository
}

// Newをつけたメソッドを定義してConstructorを生成
func NewAllTweetsUsecase(r interfaces.AllTweetsRepository) *AllTweetsUsecase {
	return &AllTweetsUsecase{
		repository: r,
	}
}

// AllTweetsUsecaseクラスのメソッド定義みたいなもの
func (u *AllTweetsUsecase) Execute() (*entities.AllTweets, error) {
	return &u.repository.Get()
}
