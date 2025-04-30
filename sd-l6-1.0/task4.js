// Task 4: delUser(number)
import { getServerURL } from "./task1.js";

export function delUser(number) {
  fetch(getServerURL() + `/users/${number}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(() => {
    console.log(`Usuario con ID ${number} eliminado.`);
  })
  .catch(error => {
    console.error("Error al eliminar el usuario:", error);
  });
}




