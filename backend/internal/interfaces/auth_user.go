package interfaces

import "myapp/internal/entities"

type AuthUserRepository interface {
	FetchUserById(id int) (*entities.User, error)
}
