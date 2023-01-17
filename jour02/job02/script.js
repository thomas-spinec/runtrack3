// attente du chargement du DOM
document.addEventListener("DOMContentLoaded", function () {
  // récupération de l'élément
  const btn = document.querySelector("#button");

  // déclaration de la fonction
  function showhide() {
    // vérification de l'état de l'élément
    if (btn.innerHTML == "Show") {
      // création de l'élément
      const article = document.createElement("article");
      // ajout du texte
      article.textContent =
        "L'important n'est pas la chute, mais l'atterissage";
      // ajout de l'élément
      document.querySelector("body").appendChild(article);
      // modification de l'élément
      btn.innerHTML = "Hide";
    } else {
      // suppression de l'élément
      document.querySelector("article").remove();
      // modification de l'élément
      btn.innerHTML = "Show";
    }
  }

  // écouteur d'événement
  btn.addEventListener("click", showhide());
});
