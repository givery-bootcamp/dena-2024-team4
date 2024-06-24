package entities

type User struct {
	ID          int    `json:"id" db:"id"`
	Username    string `json:"username" db:"username"`
	DisplayName string `json:"display_name" db:"display_name"`
	Password    string `json:"password" db:"password"`
}
