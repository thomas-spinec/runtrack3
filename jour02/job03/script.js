// attente du chargement du DOM
document.addEventListener("DOMContentLoaded", function () {
  // déclaration des variables
  const btn = document.querySelector("#button");

  // déclaration de la fonction
  function addone() {
    // récupération de l'élément
    const p = document.querySelector("#compteur");
    // récupération de la valeur de l'élément
    let texte = p.innerHTML;
    // incrémentation
    texte++;
    // affichage de la valeur de l'élément
    p.innerHTML = texte;
  }

  // écouteur d'événement
  btn.addEventListener("click", () => {
    // affichage de la valeur de l'élément
    addone();
  });
});
