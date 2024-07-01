// ripository層のインターフェースを定義
package interfaces

import (
	"myapp/internal/entities"
)

type UserRepository interface {
	Create(body entities.CreateUserBody) (*entities.User, error)
}
