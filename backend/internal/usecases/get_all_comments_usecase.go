package usecases

import (
	"myapp/internal/entities"
	"myapp/internal/interfaces"
	"myapp/internal/repositories"
)

type GetAllCommentsUsecase struct {
	repository interfaces.AllCommentsRepository
}

// Newをつけたメソッドを定義してConstructorを生成
func NewGetAllCommentsUsecase() *GetAllCommentsUsecase {
	r := repositories.NewAllCommentsRepository()

	return &GetAllCommentsUsecase{
		repository: r,
	}
}

// GetAllCommentsUsecaseクラスの実行メソッド
func (u *GetAllCommentsUsecase) Execute(params entities.GetAllCommentsRequestParameter) ([]*entities.Comment, error) {
	if params.Sort == "created_at" {
		params.Sort = "created_at:desc"
	}
	return u.repository.GetAll(params)
}
