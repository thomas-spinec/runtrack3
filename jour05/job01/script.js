// attente du chargement du DOM
document.addEventListener("DOMContentLoaded", function loaded() {
  let data = new FormData();

  const div = document.querySelector("#content");
  const btnInsc = document.querySelector("#inscription");
  const btnConn = document.querySelector("#connexion");

  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const regexmdp =
    /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;

  // fonction d'inscription
  function inscription() {
    fetch("inscription.php")
      .then((response) => response.text())
      .then((content) => {
        div.innerHTML = content;

        // partie form
        let nom = document.querySelector("#nom");
        let prenom = document.querySelector("#prenom");
        let email = document.querySelector("#email");
        let pass = document.querySelector("#password");
        let pass2 = document.querySelector("#password2");

        let error = document.querySelectorAll(".error");

        const formInsc = document.querySelector("#form-insc");

        nom.addEventListener("keyup", function () {
          let nomValue = this.value;
          if (nomValue === "") {
            error[0].innerHTML = "Veuillez rentrer un nom";
            validation = false;
          } else {
            error[0].innerHTML = "";
            validation = true;
          }
        });

        prenom.addEventListener("keyup", function () {
          let prenomValue = this.value;
          if (prenomValue === "") {
            error[1].innerHTML = "Veuillez rentrer un prénom";
            validation = false;
          } else {
            error[1].innerHTML = "";
            validation = true;
          }
        });

        email.addEventListener("keyup", function () {
          let emailValue = this.value;

          const found = emailValue.match(regexEmail);

          if (emailValue === "") {
            error[2].innerHTML = "Veuillez rentrer un email";
            validation = false;
          } else {
            if (found === null) {
              error[2].innerHTML = "Veuillez rentrer un email valide";
              validation = false;
            } else {
              data.append("email", emailValue);

              fetch("checkEmail.php", {
                method: "POST",
                body: data,
              })
                .then((response) => response.text())
                .then((response) => {
                  console.log(response);
                  if (response === "0") {
                    error[2].innerHTML = "Cet email est déjà pris";
                    validation = false;
                  } else {
                    error[2].innerHTML = "";
                    validation = true;
                  }
                })
                // .then ((response) => console.log(response))
                .catch((error) => console.log(error));
            }
          }
        });

        pass.addEventListener("focusout", function () {
          let passValue = this.value;

          const find = passValue.match(regexmdp);

          if (passValue === "") {
            error[3].innerHTML = "Veuillez rentrer un mot de passe";
            validation = false;
          } else {
            if (find === null) {
              error[3].innerHTML =
                "Votre mot de passe doit faire 8 caractères, contenir au moins une minuscule une majuscule un chiffre et un caractère spécial";
              validation = false;
            } else {
              error[3].innerHTML = "";
              validation = true;
            }
          }
        });

        pass2.addEventListener("focusout", function () {
          let pass2Value = this.value;
          if (pass2Value === "") {
            error[4].innerHTML =
              "Veuillez faire une confirmation de mot de passe";
            validation = false;
          } else {
            if (pass2Value !== pass.value) {
              error[4].innerHTML =
                "Le mot de passe et sa confirmation ne sont pas les mêmes";
              validation = false;
            } else {
              error[4].innerHTML = "";
              validation = true;
            }
          }
        });

        formInsc.addEventListener("submit", (e) => {
          e.preventDefault();
          if (validation !== true) {
            console.log("validation bloqué");
          } else {
            const prePayload = new FormData(formInsc);
            const payload = new URLSearchParams(prePayload);
            fetch("inscription.php", {
              method: "POST",
              body: payload,
            })
              .then((response) => response.text())
              .then((response) => {
                console.log(response);
                const message = document.createElement("p");
                message.innerHTML =
                  "Votre inscription a bien été prise en compte";
                document.querySelector("#message").appendChild(message);
                message.style.color = "green";
                connexion();
              })
              .catch((error) => console.log(error));
          }
        });
      })
      .catch((error) => console.log(error));
  }

  // Fonction de connexion
  function connexion() {
    fetch("connexion.php")
      .then((response) => response.text())
      .then((content) => {
        div.innerHTML = content;

        // partie form

        let email = document.querySelector("#email");
        let pass = document.querySelector("#password");

        let error = document.querySelectorAll(".error");

        const formConn = document.querySelector("#form-conn");

        email.addEventListener("keyup", function () {
          let emailValue = this.value;

          const found = emailValue.match(regexEmail);

          if (emailValue === "") {
            error[0].innerHTML = "Veuillez rentrer un email";
            validation = false;
          } else {
            if (found === null) {
              error[0].innerHTML = "Veuillez rentrer un email valide";
              validation = false;
            } else {
              data.append("email", emailValue);

              fetch("checkEmail.php", {
                method: "POST",
                body: data,
              })
                .then((response) => response.text())
                .then((response) => {
                  console.log(response);
                  if (response === "0") {
                    error[0].innerHTML = "";
                    validation = true;
                  } else {
                    error[0].innerHTML = "Cet email n'existe pas";
                    validation = true;
                  }
                })
                // .then ((response) => console.log(response))
                .catch((error) => console.log(error));
            }
          }
        });

        pass.addEventListener("focusout", function () {
          let passValue = this.value;

          const find = passValue.match(regexmdp);

          if (passValue === "") {
            error[1].innerHTML = "Veuillez rentrer un mot de passe";
            validation = false;
          } else {
            if (find === null) {
              error[1].innerHTML =
                "Votre mot de passe doit faire 8 caractères, contenir au moins une minuscule une majuscule un chiffre et un caractère spécial";
              validation = false;
            } else {
              error[1].innerHTML = "";
              validation = true;
            }
          }
        });

        formConn.addEventListener("submit", (e) => {
          e.preventDefault();

          if (validation !== true) {
            console.log("validation bloqué");
          } else {
            const prePayload = new FormData(formConn);
            const payload = new URLSearchParams(prePayload);
            fetch("checkConn.php", {
              method: "POST",
              body: payload,
            })
              .then((response) => response.text())
              .then((response) => {
                console.log(response);
                if (response === "0") {
                  error[1].innerHTML = "Mot de passe incorrect";
                  validation = false;
                } else {
                  error[1].innerHTML = "";
                  validation = true;
                  acceuil(payload);
                }
              })
              .catch((error) => console.log(error));
          }
        });
      })
      .catch((error) => console.log(error));
  }

  // Fonction de l'accueil
  function acceuil(payload) {
    fetch("accueil.php", {
      method: "POST",
      body: payload,
    })
      .then((response) => response.text())
      .then((content) => {
        div.innerHTML = content;
      })
      .catch((error) => console.log(error));
  }

  // récupération du formulaire lorsqu'on appuie sur le bouton

  btnInsc.addEventListener("click", function () {
    inscription();
  });

  btnConn.addEventListener("click", function () {
    connexion();
  });

  // // attente du chargement du DOM
  // document.addEventListener("DOMContentLoaded", function () {
  //   const div = document.querySelector("#content");
  //   const btnInsc = document.querySelector("#inscription");
  //   const btnConn = document.querySelector("#connexion");

  //   btnInsc.addEventListener("click", () => {
  //     fetch("inscription.php")
  //       .then((response) => response.text())
  //       .then((data) => {
  //         div.innerHTML = data;
  //         // Partie formulaire
  //         const formInsc = document.querySelector("#form-insc");

  //         formInsc.addEventListener("submit", (e) => {
  //           e.preventDefault();

  //           const prePayload = new FormData(formInsc);

  //           const payload = new URLSearchParams(prePayload);

  //           //   console.log([...payload]);
  //           //   for (const [key, value] of payload) {
  //           //     console.log(`${key}: ${value}`);
  //           //   }

  //           fetch("inscription.php", {
  //             method: "POST",
  //             body: payload,
  //           })
  //             .then((res) => res.json())
  //             .then((data) => console.log(data))
  //             .catch((err) => console.log(err));
  //         });
  //       });
  //   });
  // });
});
