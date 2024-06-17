package usecases

import (
	"myapp/internal/entities"
	"myapp/internal/repositories"
)

type AllTweetsUsecase struct {
	repository repositories.AllTweetsRepository
}

// データベース接続引数を取り除く
func NewAllTweetsUsecase() *AllTweetsUsecase {
	r := repositories.NewAllTweetsRepository()

	return &AllTweetsUsecase{
		repository: *r,
	}
}

func (u *AllTweetsUsecase) Execute() ([]*entities.Post, error) {
	return u.repository.GetAll()
}
