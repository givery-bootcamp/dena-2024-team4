// ripository層のインターフェースを定義
package interfaces

import (
	"myapp/internal/entities"
)

type AllTweetsRepository interface {
	GetAll(offset int, limit int) ([]*entities.Post, error)
}
