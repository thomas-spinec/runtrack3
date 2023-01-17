// lorsque l'utilisateur tape une lettre de son clavier, elle est ajouté dans le textearea (même si le focus n'est pas le textarea), si le focus en cours est le  textarea, la lettre sera rajouté 2fois
// attente du chargement du DOM
document.addEventListener("DOMContentLoaded", function () {
  // déclaration des variables
  const textarea = document.querySelector("#keylogger");

  // fonction d'ajout de la lettre
  function addkey(event) {
    let add = event.key.length;
    let result = add > 0 && add < 2 ? event.key : "";
    textarea.value = textarea.value + result;
  }
  document.addEventListener("keydown", (event) => addkey(event));
});
