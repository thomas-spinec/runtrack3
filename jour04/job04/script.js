// récupérer la variable "json" de la page users.php, puis utiliser ces données pour les afficher dans le tableau en index.php
// attente du chargement du DOM
document.addEventListener("DOMContentLoaded", function () {
  function getUsers() {
    //
    fetch("users.php")
      .then((response) => response.json())
      .then((data) => {
        const table = document.querySelector("tbody");
        table.innerHTML = "";
        data.forEach((user) => {
          table.innerHTML += `
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.nom}</td>
                            <td>${user.prenom}</td>
                            <td>${user.email}</td>
                        </tr>
                        `;
        });
      });
  }
  getUsers();
  const btn = document.querySelector("#button");
  btn.addEventListener("click", () => {
    getUsers();
  });
});
