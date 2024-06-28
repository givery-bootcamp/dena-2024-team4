package repositories

import (
	"myapp/internal/entities"
	"myapp/internal/external"

	"gorm.io/gorm"
)

type AuthUserRepository struct {
	Conn *gorm.DB
}

func NewAuthUserRepository() *AuthUserRepository {
	return &AuthUserRepository{
		Conn: external.GetDB(),
	}
}

func (r *AuthUserRepository) FetchUserById(id int) (*entities.User, error) {
	var user *entities.User

	result := r.Conn.Where("id = ?", id).First(&user)

	if result.Error != nil {
		return nil, result.Error
	}
	return user, nil
}
