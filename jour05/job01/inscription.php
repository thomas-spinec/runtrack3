<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "utilisateurs";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

// envoie des données dans la bdd grâce aux infos envoyés par le script js

if (isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['password2'])) {
    $nom = htmlspecialchars($_POST['nom']);
    $prenom = htmlspecialchars($_POST['prenom']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    $password2 = htmlspecialchars($_POST['password2']);

    // cryptage du mdp
    $password = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO utilisateurs (nom, prenom, email, password) VALUES (:nom, :prenom, :email, :password)";
    $insert = $conn->prepare($sql);
    $insert->execute(array(
        ':nom' => $nom,
        ':prenom' => $prenom,
        ':email' => $email,
        ':password' => $password,
    ));
}

// fermeture co
$conn = null;

?>


<form id="form-insc">
    <div id="name">
        <label for="nom">Nom</label>
        <input type="text" name="nom" id="nom">
        <p class="error"></p>
    </div>
    <div id="firstname">
        <label for="prenom">Prénom</label>
        <input type="text" name="prenom" id="prenom">
        <p class="error"></p>
    </div>
    <div id="mail">
        <label for="email">Email</label>
        <input type="text" name="email" id="email">
        <p class="error"></p>
    </div>
    <div id="pass">
        <label for="password">Mot de passe</label>
        <input type="password" name="password" id="password">
        <p class="error"></p>
    </div>
    <div id="pass2">
        <label for="password2">Confirmer votre mot de passe</label>
        <input type="password" name="password2" id="password2">
        <p class="error"></p>
    </div>
    <button type="submit" id="submitInsc">S'identifier</button>
</form>