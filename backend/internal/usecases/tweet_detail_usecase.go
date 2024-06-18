// usecase層はビジネスロジックを定義する
// usecase層は基本的にrepository層にアクセスし、controller層にデータを返す
package usecases

import (
	"myapp/internal/entities"
	"myapp/internal/interfaces"
	"myapp/internal/repositories"
)

type TweetDetailUsecase struct {
	repository interfaces.TweetDetailRepository
}

// Newをつけたメソッドを定義してConstructorを生成
func NewTweetDetailUsecase() *TweetDetailUsecase {
	r := repositories.NewTweetDetailRepository()

	return &TweetDetailUsecase{
		repository: r,
	}
}

func (u *TweetDetailUsecase) Execute(tweetId int) (*entities.Post, error) {
	return u.repository.Get(tweetId)
}
