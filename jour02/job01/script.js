// attente du chargement du DOM
document.addEventListener("DOMContentLoaded", function () {
  // déclaration des variables
  const btn = document.querySelector("#button");
  // déclaration de la fonction
  function citation() {
    // récupération de l'élément
    const cit = document.querySelector("#citation");
    // récupération de la valeur de l'élément
    const citVal = cit.innerHTML;
    // affichage de la valeur de l'élément
    return citVal;
  }

  // écouteur d'événement
  btn.addEventListener("click", () => {
    // affichage de la valeur de l'élément
    console.log(citation());
  });
});
