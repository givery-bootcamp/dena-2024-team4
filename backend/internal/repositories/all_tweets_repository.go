// ripository層は、DBアクセスを行う層で、DBアクセスを行うメソッドを定義する
// 基本的にentity層にアクセスし、usecase層にデータを返す
package repositories

import (
	"errors"
	"myapp/internal/entities"
	"myapp/internal/external"

	"gorm.io/gorm"
)

type AllTweetsRepository struct {
	Conn *gorm.DB
	offset int
	limit int

}

func NewAllTweetsRepository(offset int, limit int) *AllTweetsRepository {
	return &AllTweetsRepository{
		Conn: external.DB,
	}
}

func (r *AllTweetsRepository) GetAll(offset int, limit int) ([]*entities.Post, error) {
	var tweets []*entities.Post
	// 実際のデータはobjに入る
	// resultでDBアクセスの状況とかが見れる(エラーハンドリング)
	// deleted_atがnullのものは、投稿が存在するので、nullのものだけ全部取得
    result := r.Conn.Where("deleted_at IS NULL").Offset(offset).Limit(limit).Find(&tweets)

	if result.Error != nil {
		if errors.Is(result.Error, gorm.ErrRecordNotFound) {
			return nil, nil
		}
		return nil, result.Error
	}
	return tweets, nil
}
