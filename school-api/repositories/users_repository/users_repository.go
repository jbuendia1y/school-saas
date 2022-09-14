package users_repository

import "github.com/jbuendia1y/school-api/models"

func FindAll(page uint64) ([]models.User, error) {
	return nil, nil
}

func FindOne(id string) (models.User, error) {
	return models.User{}, nil
}

func Create(data *models.User) error {
	return nil
}

func Disable(id string) error {
	return nil
}
