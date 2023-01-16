// script permettant de vérifier qu'une années est bissextile
// déclaration de la variable
// let year = document.getElementById("year").innerText;
// let années = parseInt(year, 10);
let années = 2023;

// déclaration de la fonction
function bisextile(années) {
  if ((années % 4 == 0 && années % 100 != 0) || années % 400 == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// appel de la fonction
bisextile(années);
