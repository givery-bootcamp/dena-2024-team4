// usecase層はビジネスロジックを定義する
// usecase層は基本的にrepository層にアクセスし、controller層にデータを返す
package usecases

import (
	"myapp/internal/entities"
	"myapp/internal/interfaces"
	"myapp/internal/repositories"
)

type UpdateTweetDetailsUsecase struct {
	repository interfaces.TweetDetailRepository
}

// Newをつけたメソッドを定義してConstructorを生成
func NewUpdateTweetDetailsUsecase() *UpdateTweetDetailsUsecase {
	r := repositories.NewTweetDetailRepository()

	return &UpdateTweetDetailsUsecase{
		repository: r,
	}
}

func (u *UpdateTweetDetailsUsecase) Execute(tweetId int, body entities.UpdatePostBody) (*entities.Post, error) {
	return u.repository.Update(tweetId, body)
}
