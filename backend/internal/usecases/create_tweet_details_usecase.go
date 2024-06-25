// usecase層はビジネスロジックを定義する
// usecase層は基本的にrepository層にアクセスし、controller層にデータを返す
package usecases

import (
	"myapp/internal/entities"
	"myapp/internal/interfaces"
	"myapp/internal/repositories"
)

type CreateTweetDetailsUsecase struct {
	repository interfaces.TweetDetailRepository
}

// Newをつけたメソッドを定義してConstructorを生成
func NewCreateTweetDetailsUsecase() *CreateTweetDetailsUsecase {
	r := repositories.NewTweetDetailRepository()

	return &CreateTweetDetailsUsecase{
		repository: r,
	}
}

func (u *CreateTweetDetailsUsecase) Execute(body entities.CreatePostBody) (*entities.Post, error) {
	return u.repository.Create(body)
}
