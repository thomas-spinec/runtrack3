// attente du chargement du DOM
document.addEventListener("DOMContentLoaded", function () {
  const div = document.querySelector("#content");
  const btnInsc = document.querySelector("#inscription");
  const btnConn = document.querySelector("#connexion");

  btnInsc.addEventListener("click", () => {
    fetch("inscription.php")
      .then((response) => response.text())
      .then((data) => {
        div.innerHTML = data;
        // Partie formulaire
        const formInsc = document.querySelector("#form-insc");

        formInsc.addEventListener("submit", (e) => {
          e.preventDefault();

          const prePayload = new FormData(formInsc);

          const payload = new URLSearchParams(prePayload);

          console.log([...payload]);
          for (const [key, value] of payload) {
            console.log(`${key}: ${value}`);
          }

          fetch("inscription.php", {
            method: "POST",
            body: payload,
          })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        });
      });
  });
});
