package main

import (
	"context"
	"log"
	"myapp/ent"
)

func main() {
	// Initialize database
	// external.SetupDB()

	// // Setup webserver
	// app := gin.Default()
	// app.Use(middleware.Transaction())
	// app.Use(middleware.Cors())
	// middleware.SetupRoutes(app)
	// app.Run(fmt.Sprintf("%s:%d", config.HostName, config.Port))

	client, err := ent.Open("mysql", "<user>:<pass>@tcp(<host>:<port>)/<database>?parseTime=True")
	if err != nil {
		log.Fatalf("failed opening connection to mysql: %v", err)
	}
	defer client.Close()
	// Run the auto migration tool.
	if err := client.Schema.Create(context.Background()); err != nil {
		log.Fatalf("failed creating schema resources: %v", err)
	}
}
