package usecases

import (
	"myapp/internal/entities"
	"myapp/internal/interfaces"
	"myapp/internal/repositories"
)

type AuthUserUsecase struct {
	repository interfaces.AuthUserRepository
}

func NewAuthUserUsecase() *AuthUserUsecase {
	r := repositories.NewAuthUserRepository()

	return &AuthUserUsecase{
		repository: r,
	}
}

func (u *AuthUserUsecase) Execute(id int) (*entities.User, error) {
	user, err := u.repository.FetchUserById(id)
	if err != nil {
		return nil, err
	}

	return user, nil
}
