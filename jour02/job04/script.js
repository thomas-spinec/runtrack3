// lorsque l'utilisateur tape une lettre de son clavier, elle est ajouté dans le textearea (même si le focus n'est pas le textarea), si le focus en cours est le  textarea, la lettre sera rajouté 2fois
// attente du chargement du DOM
document.addEventListener("DOMContentLoaded", function () {
  // déclaration des variables
  const textarea = document.querySelector("#keylogger");

  // fonction d'ajout de la lettre
  function addkey(event) {
    let add = event.key;
    textarea.value = textarea.value + add;
  }
  document.addEventListener("keydown", (event) => addkey(event));
});

// function addkey(key) {
//   let add = String.fromCharCode(key.which);
//   document.getElementById("keylogger").value =
//     document.getElementById("keylogger").value + add;
// }

// onkeypress = function () {
//   addkey(event);
// };
