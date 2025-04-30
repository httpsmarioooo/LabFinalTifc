// Task 3: addUser(first_name, last_name, email)
import { getServerURL } from "./task1.js"

export function addUser(first_name, last_name, email) {
    const newUser = {
        first_name,
        last_name,
        email
    };

    fetch(getServerURL() + "/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(data => console.log("Nuevo usuario agregado:", data))
    .catch(error => console.error("Error al agregar el usuario:", error));
}


