package entities

type User struct {
	ID          int    `json:"id"`
	DisplayName string `json:"display_name"`
	UserName    string `json:"username"`
	Password    string `json:"password"`
}
