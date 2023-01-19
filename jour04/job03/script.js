// Récupération du contenue d'un json avec une ou plusieurs key
//attente du chargement du DOM
document.addEventListener("DOMContentLoaded", function () {
  // Fonction pour tester si les pokemon correspondent aux critères
  function check(pokemon, critID, critName, critType) {
    if (critID === "" && critName === "") {
      return pokemon.type.includes(critType);
    } else if (critID === "" && critType === "") {
      return (
        pokemon.name.french.includes(critName) ||
        pokemon.name.english.includes(critName)
      );
    } else if (critName === "" && critType === "") {
      return pokemon.id === critID;
    } else if (critID === "") {
      return (
        (pokemon.name.french.includes(critName) ||
          pokemon.name.english.includes(critName)) &&
        pokemon.type.includes(critType)
      );
    } else if (critName === "") {
      return pokemon.id === critID && pokemon.type.includes(critType);
    } else if (critType === "") {
      return (
        pokemon.id === critID &&
        (pokemon.name.french.includes(critName) ||
          pokemon.name.english.includes(critName))
      );
    } else {
      return (
        pokemon.id === critID &&
        (pokemon.name.french.includes(critName) ||
          pokemon.name.english.includes(critName)) &&
        pokemon.type.includes(critType)
      );
    }
  }

  // Définition du bouton
  const btn = document.querySelector("#filtrer");

  btn.addEventListener("click", () => {
    let critID = document.querySelector("#id").value;
    if (critID != "") {
      critID = parseInt(critID);
    }
    console.log(critID);
    const critName = document.querySelector("#name").value;
    console.log(critName);
    const critType = document.querySelector("#type").value;
    console.log(critType);

    fetch("pokemon.json")
      .then((response) => response.json())
      .then((response) => {
        value = response.filter((pokemon) => {
          return check(pokemon, critID, critName, critType);
        });
        // console.log(value);
        //affichage du resultat dans un tableau sur la page
        const table = document.querySelector("tbody");
        table.innerHTML = "";
        // si aucun pokemon ne correspond
        if (value.length === 0) {
          table.innerHTML = `
            <tr>
            <td colspan="11">Aucun pokemon ne correspond à vos critères</td>
            </tr>
            `;
        } else {
          value.forEach((pokemon) => {
            //   let base = JSON.stringify(pokemon.base);
            //   console.log(base);
            if (pokemon.type[1] === undefined) {
              pokemon.type[1] = " ";
            }
            table.innerHTML += `
                    <tr>
                    <td>${pokemon.id}</td>
                    <td>${pokemon.name.french}</td>
                    <td>${pokemon.name.english}</td>
                    <td>${pokemon.type[0]}</td>
                    <td>${pokemon.type[1]}</td>
                    <td>${pokemon.base.HP}</td>
                    <td>${pokemon.base.Attack}</td>
                    <td>${pokemon.base.Defense}</td>
                    <td>${pokemon.base["Sp. Attack"]}</td>
                    <td>${pokemon.base["Sp. Defense"]}</td>
                    <td>${pokemon.base.Speed}</td>
                    </tr>
                    `;
          });
        }
      });
    // affichage du resultat dans un tableau sur la page
  });
});
