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

// check if email already exists
$sql = "SELECT * FROM utilisateurs WHERE email = :email";
$select = $conn->prepare($sql);
$select->execute(array(
    ':email' => $email,
));
$result = $select->fetchAll();


if (count($result) !== 0) {
    echo '0';
} else {
    echo true;
}

// fermeture co
$conn = null;
