// DBの定義からusecaseに渡すデータ定義をする
package entities

import "time"

type Post struct {
	Id        *int       `json:"id" db:"id"`
	UserId    *int       `json:"user_id" db:"user_id"`
	Title     *string    `json:"title" db:"title"`
	Body      *string    `json:"body" db:"body"`
	CreatedAt *time.Time `json:"created_at" db:"created_at"`
	UpdatedAt *time.Time `json:"updated_at" db:"updated_at"`
	DeletedAt *time.Time `json:"deleted_at" db:"deleted_at"`
}

// 投稿用のリクエストボディ
type CreatePostBody struct {
	UserId *int    `json:"user_id"`
	Title  *string `json:"title"`
	Body   *string `json:"body"`
}

// 投稿用のリクエストボディ
type UpdatePostBody struct {
	Title *string `json:"title"`
	Body  *string `json:"body"`
}
