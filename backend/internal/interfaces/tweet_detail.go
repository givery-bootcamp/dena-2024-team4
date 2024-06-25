// ripository層のインターフェースを定義
package interfaces

import (
	"myapp/internal/entities"
)

type TweetDetailRepository interface {
	Get(tweetId int) (*entities.Post, error)
	Create(body entities.CreatePostBody) (*entities.Post, error)
}
