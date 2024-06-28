package interfaces

import (
	"myapp/internal/entities"
)

type AllCommentsRepository interface {
	GetAll(entities.GetAllCommentsRequestParameter) ([]*entities.Comment, error)
}
