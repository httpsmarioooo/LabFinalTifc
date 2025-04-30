// Task 2: listUsers()
import { getServerURL } from "./task1.js";

export function listUsers() {
    fetch(getServerURL() + "/users")
        .then(res => res.json())
        .then(data => console.log(data))    
}
listUsers()

