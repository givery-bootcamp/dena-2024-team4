// ripository層のインターフェースを定義
package interfaces

type TweetDeleteRepository interface {
	Delete(tweetId int) error
}