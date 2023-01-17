// code konami requis pour afficher les couleurs de LaPlateforme
// attente du chargement du DOM
document.addEventListener("DOMContentLoaded", function () {
  // déclaration des variables
  const body = document.querySelector("body");
  const before = document.querySelector("#before");
  let table = new Array();
  const konami = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

  // déclaration de la fonction
  function konamiCode(event) {
    // récupération de la valeur de l'élément
    table.push(event.key);
    // affichage de la valeur de l'élément
    console.log(table);
    // vérification de la valeur de l'élément
    if (table.toString() == konami.toString()) {
      // changement de couleur du body
      console.log("konami");
      before.remove();
      // création des nouveaux éléments
      const div1 = document.createElement("div");
      const div2 = document.createElement("div");
      const title1 = document.createElement("h1");
      const title2 = document.createElement("h1");
      title1.textContent = "LaPlateforme_";
      title2.textContent = "La nouvelle école du numérique";
      body.appendChild(div1);
      body.appendChild(div2);
      div1.appendChild(title1);
      div2.appendChild(title2);
      // style div 1 bleue
      div1.style.backgroundColor = "#09354C";
      div1.style.color = "#F2F2F2";
      div1.style.height = "50vh";
      // style div 2 blanche
      div2.style.backgroundColor = "#F2F2F2";
      div2.style.color = "#09354C";
      div2.style.height = "50vh";
      // style title1
      title1.style.textAlign = "center";
      title1.style.paddingTop = "20vh";
      // style title2
      title2.style.textAlign = "center";
      title2.style.paddingTop = "20vh";
      // suppression de la table
      delete table;
    }
  }

  // écouteur d'événement
  document.addEventListener("keyup", konamiCode);
});
