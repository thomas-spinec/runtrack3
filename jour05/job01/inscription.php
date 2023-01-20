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



?>


<form id="form-insc">
    Nom: <input type="text" name="nom" id="nom">
    Prénom: <input type="text" name="prenom" id="prenom">
    Email: <input type="text" name="email" id="email">
    Mot de passe<input type="password" name="password" id="password">
    Confirmer votre mot de passe<input type="password" name="password2" id="password2">
    <button type="submit">S'identifier</button>
</form>