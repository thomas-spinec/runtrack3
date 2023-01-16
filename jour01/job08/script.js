// Fonction prenant en paramètres deux variables, si ces deux variables sont des nombres premiers, alors la fonction retourne leur somme. Sinon, la fonction retourne false.
// déclaration de la fonction
function sommenombrespremiers(a, b) {
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      return false;
    }
  }
  for (let i2 = 2; i2 < b; i2++) {
    if (b % i2 === 0) {
      return false;
    }
  }
  console.log(a + " + " + b + " =");
  return a + b;
}

// appel de la fonction
console.log(sommenombrespremiers(1, 4));
// expect false
console.log(sommenombrespremiers(7, 7));
// expect 14
