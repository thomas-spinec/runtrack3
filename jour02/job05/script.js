// attente du chargement du DOM
document.addEventListener("DOMContentLoaded", function () {
  // déclaration des variables
  const footer = document.querySelector("footer");

  function color() {
    const winScroll = document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    // changement de couleur du footer en fonction du pourcentage
    if (scrolled >= 0 && scrolled <= 25) {
      footer.style.backgroundColor = "rgb(226, 0, 0)";
    } else if (scrolled > 25 && scrolled <= 50) {
      footer.style.backgroundColor = "rgb(226, 139, 0)";
    } else if (scrolled > 50 && scrolled <= 75) {
      footer.style.backgroundColor = "rgb(226, 208, 0)";
    } else if (scrolled > 75 && scrolled <= 100) {
      footer.style.backgroundColor = "rgb(120, 208, 0)";
    }
  }
  // appel de la fonction
  window.onscroll = function () {
    color();
  };
});
