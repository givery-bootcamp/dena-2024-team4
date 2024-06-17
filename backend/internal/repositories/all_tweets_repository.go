// repositories/all_tweets_repository.go
package repositories

import (
	"myapp/internal/entities"
	"myapp/internal/external"

	"gorm.io/gorm"
)

type AllTweetsRepository struct {
	Conn *gorm.DB
}

func NewAllTweetsRepository() *AllTweetsRepository {
	return &AllTweetsRepository{
		Conn: external.GetDB(),
	}
}

func (r *AllTweetsRepository) GetAll() ([]*entities.Post, error) {
	var tweets []*entities.Post
	result := r.Conn.Where("deleted_at IS NULL").Find(&tweets)
	if result.Error != nil {
		return nil, result.Error
	}
	return tweets, nil
}
