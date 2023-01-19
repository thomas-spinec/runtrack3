// récupération du texte dans un fichier expression.txt avec fetch puis insérer le contenue dans index.php
// attente du chargement du DOM
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector("#button");
  btn.addEventListener("click", () => {
    fetch("expression.txt")
      .then((response) => response.text())
      .then((txt) => {
        const p = document.createElement("p");
        p.innerHTML = txt;
        document.body.appendChild(p);
      });
  });
});
