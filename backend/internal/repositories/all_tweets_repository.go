package repositories

import (
	"errors"
	"myapp/internal/entities"

	"gorm.io/gorm"
)

type AllTweetsRepository struct {
	Conn *gorm.DB
}

func NewAllTweetsRepository(conn *gorm.DB) *AllTweetsRepository {
	return &AllTweetsRepository{
		Conn: conn,
	}
}

func (r *AllTweetsRepository) Get() (*entities.AllTweets, error) {
	var obj entities.AllTweets
	// 実際のデータはobjに入る
	// resultでDBアクセスの状況とかが見れる(エラーハンドリング)
	// deleted_atがnullのものは、投稿が存在するので、nullのものだけ全部取得
	result := r.Conn.Where("deleted_at = null").Find(&obj)

	if result.Error != nil {
		if errors.Is(result.Error, gorm.ErrRecordNotFound) {
			return nil, nil
		}
		return nil, result.Error
	}
	return (&obj), nil
}

func convertAllTweetsRepositoryModelToEntity(v *AllTweets) *entities.AllTweets {
	return &entities.AllTweets{
		// [TODO]
	}
}
