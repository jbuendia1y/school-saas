package models

type Classroom struct {
	Name   string
	Tenant Tenant
}

type ClassroomStudent struct {
	Classroom Classroom
	Student   User
}
