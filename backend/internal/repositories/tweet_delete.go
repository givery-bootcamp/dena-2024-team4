// ripository層は、DBアクセスを行う層で、DBアクセスを行うメソッドを定義する
// 基本的にentity層にアクセスし、usecase層にデータを返す
package repositories

import (
	"errors"
	"gorm.io/gorm"
	"myapp/internal/entities"
	"myapp/internal/external"
)

type TweetDeleteRepository struct {
	Conn *gorm.DB
}

func NewTweetDeleteRepository() *TweetDeleteRepository {
	return &TweetDeleteRepository{
		Conn: external.GetDB(),
	}
}

func (r *TweetDeleteRepository) Delete(tweetId int) error {
	var tweet *entities.Post

	// レコードを検索
	result := r.Conn.First(&tweet, tweetId)

	// レコードが見つからなかった場合のエラーチェック
	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		return gorm.ErrRecordNotFound
	} else if result.Error != nil {
		return result.Error
	}

	// レコードのdeleted_atがNULLではない場合のエラーチェック
	if tweet.DeletedAt != nil {
		return errors.New("already deleted")
	}

	// deleted_atフィールドを現在の時間に更新
	result = r.Conn.Model(&tweet).Update("deleted_at", gorm.Expr("NOW()"))

	// 更新時のエラーチェック
	if result.Error != nil {
		return result.Error
	}
	return nil
}