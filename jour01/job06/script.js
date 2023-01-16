/*  fonction affichant des nombres et en remplaçant certains par des mots :
 -les multiples de 3 par "Fizz" 
 -les multiples de 5 par "Buzz"
 -les multiples de 3 et 5 par "FizzBuzz" */
// déclaration de la fonction
function fizzbuzz() {
  // boucle for
  for (let i = 1; i <= 151; i++) {
    // condition if
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// appel de la fonction
fizzbuzz();
