// usecase層はビジネスロジックを定義する
// usecase層は基本的にrepository層にアクセスし、controller層にデータを返す
package usecases

import (
	"myapp/internal/interfaces"
	"myapp/internal/repositories"
)

type TweetDeleteUsecase struct {
	repository interfaces.TweetDeleteRepository
}

// Newをつけたメソッドを定義してConstructorを生成
func NewTweetDeleteUsecase() *TweetDeleteUsecase {
	r := repositories.NewTweetDeleteRepository()

	return &TweetDeleteUsecase{
		repository: r,
	}
}

func (u *TweetDeleteUsecase) Execute(tweetId int) error {
	return u.repository.Delete(tweetId)
}