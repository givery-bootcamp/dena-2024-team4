package interfaces

import "myapp/internal/entities"

type SignInRepository interface {
	SignIn(username, password string) (*entities.User, error)
}
