package routes

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

type Credentials struct {
	username string
	password string
}

func LoginRoute(w http.ResponseWriter, r *http.Request) {
	var credentials Credentials
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Fprintf(w, "Insert a valid credentials")
	}

	json.Unmarshal(body, &credentials)
}
