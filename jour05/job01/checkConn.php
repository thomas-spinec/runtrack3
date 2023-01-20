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
// htmlspecialchar
$email = htmlspecialchars($_POST['email']);
$pass = htmlspecialchars($_POST['password']);

// select les infos
$sql = "SELECT * FROM utilisateurs WHERE email = :email";
$select = $conn->prepare($sql);
$select->execute(array(
    ':email' => $email,
));
$result = $select->fetch(PDO::FETCH_ASSOC);
// récup du mdp
$passHash = $result['password'];

// check if pass is correct
if (password_verify($pass, $passHash)) {
    echo true;
} else {
    echo '0';
}


// fermeture co
$conn = null;
