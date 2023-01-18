// sécurité du chargement
jQuery(document).ready(function ($) {
  // initialisation
  function Init() {
    $("#mix").css({ display: "block", marginLeft: "18%", fontSize: "20px" });
    $("#reset, #win, #lose").css("display", "none");
    $("#rangees")
      .empty()
      .css({ width: "900px", height: "399px", border: "1px solid black" });
    $("#melangees")
      .empty()
      .css({ cursor: "pointer", width: "900px", height: "399px" });

    // remplissage de la rangee mélangée avec les img dans l'ordre
    for (let i = 1; i <= 6; i++) {
      $("#melangees").append(
        '<img src="arc' + i + '.png" alt="img' + i + '" id="arc' + i + '">'
      );
    }
    // rajout d'un margin pour bien distinguer les cartes
    $("#melangees > img").css("margin", "3px");
  }
  Init();

  // le reste des fonctions
  //bouton de mélange
  $("#mix").click(function () {
    $("#rangees").empty();

    let div = $("#melangees"),
      list = $("#melangees > img"),
      i;

    for (i = $("#melangees > img").length; i >= 0; i--) {
      div.append(list[(Math.random() * i) | 0]);
    }
  });

  let count = 0;
  let result = new Array();

  // click sur une image
  $("#melangees").on("click", "img", function () {
    $("#mix").css("display", "none");
    $("#rangees").append($(this));
    // retrait du margin
    $(this).css("margin", "0px");
    let img = $(this).attr("id");
    result[count] = img;
    count++;
    // $(this).remove();

    if (count === 6) {
      if (result.toString() === "arc1,arc2,arc3,arc4,arc5,arc6") {
        $("#win").css({
          display: "block",
          position: "absolute",
          color: "green",
          fontSize: "20px",
          zindex: "999",
          padding: "6vh",
          left: "15%",
          top: "40%",
          background: " rgba(255, 255, 255, 0.6)",
        });
      } else {
        $("#lose").css({
          display: "block",
          position: "absolute",
          color: "red",
          fontSize: "20px",
          zindex: "999",
          padding: "6vh",
          left: "15%",
          top: "40%",
          background: " rgba(255, 255, 255, 0.6)",
        });
      }
      $("#reset").css({
        display: "block",
        marginLeft: "18%",
        fontSize: "20px",
      });
    }
  });

  // bouton reset
  $("#reset").click(function () {
    Init();
    count = 0;
    result = new Array();
  });
});
