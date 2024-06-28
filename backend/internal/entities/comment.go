package entities

import "time"

// Comment はコメントのエンティティを表します
type Comment struct {
	ID        *int
	PostID    *int
	UserID    *int
	Body      *string
	CreatedAt *time.Time
	UpdateAt  *time.Time
	DeletedAt *time.Time
}

// GetAllCommentsRequestParameter はコメントを取得するためのリクエストの構造体を定義します
type GetAllCommentsRequestParameter struct {
	Limit  int
	Offset int
	PostId *int
	Sort   string
}
