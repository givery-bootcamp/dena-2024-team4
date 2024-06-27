// external/db_manager.go
package external

import (
	"fmt"
	"log"
	"myapp/internal/config"
	"sync"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var (
	db   *gorm.DB
	once sync.Once
)

// InitializeDB initializes the database connection
func InitializeDB() {
	once.Do(func() {
		var err error
		dsn := fmt.Sprintf(
			"%s:%s@tcp(%s:%d)/%s?charset=utf8mb4&parseTime=True&loc=Local",
			config.DBUserName,
			config.DBPassword,
			config.DBHostName,
			config.DBPort,
			config.DBName,
		)
		db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
		if err != nil {
			log.Fatalf("Failed to connect to database: %v", err)
		}
	})
}

// GetDB returns the database connection
func GetDB() *gorm.DB {
	return db
}
