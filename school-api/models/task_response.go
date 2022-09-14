package models

type TaskResponse struct {
	Content   string
	Task      Task
	IsReviewd bool
	Note      bool
}
