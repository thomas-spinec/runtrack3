// script permettant d'afficher les jours de la semaines contenu dans un tableau
// déclaration de la variable
let jours = [
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
  "dimanche",
];

// déclaration de la fonction
function afficherjourssemaines() {
  for (let i = 0; i < jours.length; i++) {
    console.log(jours[i]);
  }
}

// appel de la fonction
afficherjourssemaines();
