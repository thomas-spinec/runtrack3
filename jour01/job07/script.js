// script permettant d'afficher si un jour au format Date est un jour travaillé ou non (week-end ou férié)
function getValue() {
  let input = document.getElementById("date").value;
  //   console.log(input)

  function jourtravaille(date) {
    // console.table(date);

    //permet de traduire le datetime en français et en string
    let options = {
      month: "long", // format toutes lettres
      day: "numeric",
      weekday: "long",
      year: "numeric",
    };
    let dateFR = new Date(date);
    let stringFR = dateFR.toLocaleDateString("fr-FR", options);
    // console.log(stringFR);

    const words = stringFR.split(" ");
    let jourString = words[0];
    let jourInt = words[1];
    let mois = words[2];
    let années = words[3];

    let jourMois = jourInt + " " + mois;
    // console.log(jourMois);

    // tableau des jours fériés de 2023
    let joursFeries = [
      "1 janvier",
      "10 avril",
      "1 mai",
      "8 mai",
      "18 mai",
      "29 mai",
      "14 juillet",
      "15 août",
      "1 novembre",
      "11 novembre",
      "25 décembre",
    ];

    if (jourString == "samedi" || jourString == "dimanche") {
      console.log(
        "Non, " +
          jourString +
          " " +
          jourMois +
          " " +
          années +
          " est un week-end."
      );
    } else if (joursFeries.includes(jourMois)) {
      console.log(
        "Le " + jourString + " " + jourMois + " " + années + " est férié."
      );
    } else {
      console.log(
        "Oui, " +
          jourString +
          " " +
          jourMois +
          " " +
          années +
          " est un jour travaillé."
      );
    }
  }

  jourtravaille(input);
}
