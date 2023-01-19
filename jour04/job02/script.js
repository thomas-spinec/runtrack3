// Récupération du contenue d'un json avec un key
//attente du chargement du DOM
document.addEventListener("DOMContentLoaded", function () {
  // méthode avec Fetch pour fichier externe
  function jsonValueKey(file, key) {
    fetch(file)
      .then((response) => response.json())

      .then((response) => {
        const value = response[key];
        console.log(value);
      });
  }

  jsonValueKey("texte.json", "name");

  // méthode avec un string en paramètre  (!!!!!! NON FONCTIONNELLE)
  //   function jsonValueKey2(string, key) {
  //     const texte = JSON.parse(json);
  //     console.log(texte[key]);
  //   }

  //   const json =
  //     "{name: 'La Plateforme_',address: '8 rue d'hozier',city: 'Marseille',nb_staff: '11',creation:'2019'}";

  //   jsonValueKey2(json, "name");
});
