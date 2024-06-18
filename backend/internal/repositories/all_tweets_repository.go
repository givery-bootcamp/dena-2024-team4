// repositories/all_tweets_repository.go
package repositories

import (
	"myapp/internal/entities"
	"myapp/internal/external"

	"gorm.io/gorm"
)

type AllTweetsRepository struct {
	Conn *gorm.DB
	offset int
	limit int

}

func NewAllTweetsRepository() *AllTweetsRepository {
	return &AllTweetsRepository{
		Conn: external.GetDB(),
	}
}

func (r *AllTweetsRepository) GetAll(offset int, limit int) ([]*entities.Post, error) {
	var tweets []*entities.Post
	// 実際のデータはobjに入る
	// resultでDBアクセスの状況とかが見れる(エラーハンドリング)
	// deleted_atがnullのものは、投稿が存在するので、nullのものだけ全部取得
    result := r.Conn.Where("deleted_at IS NULL").Offset(offset).Limit(limit).Find(&tweets)

	if result.Error != nil {
		return nil, result.Error
	}
	return tweets, nil
}
