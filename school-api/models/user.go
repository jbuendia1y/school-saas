package models

type User struct {
	Avatar    string
	FirstName string
	LastName  string

	Username string
	Password string

	IsAdmin   bool
	IsStaff   bool
	IsActive  bool
	IsTeacher bool
	IsStudent bool
}
