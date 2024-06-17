// ripository層は、DBアクセスを行う層で、DBアクセスを行うメソッドを定義する
// 基本的にentity層にアクセスし、usecase層にデータを返す
package repositories

import (
	"errors"
	"myapp/internal/entities"
	"myapp/internal/external"

	"gorm.io/gorm"
)

type TweetDetailRepository struct {
	Conn *gorm.DB
}

func NewTweetDetailRepository() *TweetDetailRepository {
	return &TweetDetailRepository{
		Conn: external.GetDB(),
	}
}

func (r *TweetDetailRepository) Get(tweetId int) (*entities.Post, error) {
	var tweet *entities.Post
	// 実際のデータはobjに入る
	// resultでDBアクセスの状況とかが見れる(エラーハンドリング)
	// deleted_atがnullのものは、投稿が存在するので、nullのものだけ全部取得

	result := r.Conn.Where("deleted_at IS NULL AND id = ?", tweetId).Find(&tweet)

	if result.Error != nil {
		if errors.Is(result.Error, gorm.ErrRecordNotFound) {
			return nil, nil
		}
		return nil, result.Error
	}
	return tweet, nil
}
