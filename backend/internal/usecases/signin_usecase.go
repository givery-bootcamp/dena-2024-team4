package usecases

import (
	"myapp/internal/entities"
	"myapp/internal/repositories"
)

type SignInUsecase struct {
	repository repositories.SignInRepository
}

func NewSignInUsecase() *SignInUsecase {
	r := repositories.NewSignInRepository()

	return &SignInUsecase{
		repository: *r,
	}
}

func (u *SignInUsecase) Execute(username, password string) (*entities.User, string, error) {
	user, err := u.repository.SignIn(username, password)
	if err != nil {
		return nil, "", err
	}

	// Convert user ID to JWT token
	token := generateJWTToken(user.ID)

	return user, token, nil
}

func generateJWTToken(userID string) string {
	// TODO: Implement JWT token generation logic
	// Generate and return JWT token using the user ID
	return ""
}
