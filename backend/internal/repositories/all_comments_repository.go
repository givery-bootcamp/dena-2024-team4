package repositories

import (
	"errors"
	"myapp/internal/entities"
	"myapp/internal/external"
	"strings"

	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

type AllCommentsRepository struct {
	Conn   *gorm.DB
	offset int
	limit  int
	postId *int
	sort   string
}

func NewAllCommentsRepository() *AllCommentsRepository {
	db := external.GetDB()
	db.Logger = logger.Default.LogMode(logger.Info)
	return &AllCommentsRepository{
		Conn: db,
	}
}

func (r *AllCommentsRepository) GetAll(params entities.GetAllCommentsRequestParameter) ([]*entities.Comment, error) {
	var comments []*entities.Comment

	// パラメータを取得
	offset := params.Offset
	limit := params.Limit
	postId := params.PostId
	sort := params.Sort

	// クエリビルダーの設定
	query := r.Conn.Where("deleted_at IS NULL").Offset(offset).Limit(limit)

	// post_idが指定されている場合、その条件を追加
	if postId != nil {
		query = query.Where("post_id = ?", *postId)
	}

	// sortが指定されている場合、その順序を設定
	if sort != "" {
		// sortパラメータのフォーマットを確認
		sortFields := strings.Split(sort, ":")
		if len(sortFields) == 2 {
			order := strings.ToUpper(sortFields[1])
			if order == "ASC" || order == "DESC" {
				query = query.Order(sortFields[0] + " " + order)
			} else {
				return nil, errors.New("invalid sort order")
			}
		} else {
			return nil, errors.New("invalid sort format")
		}
	}

	// クエリを実行して、結果をcommentsに格納
	result := query.Find(&comments)

	// エラーハンドリング
	if result.Error != nil {
		return nil, result.Error
	}

	return comments, nil
}
