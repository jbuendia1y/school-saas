package tenant_repository

import "github.com/jbuendia1y/school-api/models"

func FindAll() ([]models.Tenant, error) {
	return nil, nil
}

func FindOne(id string) (models.Tenant, error) {
	return models.Tenant{}, nil
}

func Create(data *models.Tenant) error {
	return nil
}

func Delete(id string) error {
	return nil
}
