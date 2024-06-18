// ripository層のインターフェースを定義
package interfaces

import (
	"myapp/internal/entities"
)

type TweetDetailRepository interface {
	Get(tweetId int) (*entities.Post, error)
}
