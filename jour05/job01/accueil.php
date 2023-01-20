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

// select les infos
$sql = "SELECT * FROM utilisateurs WHERE email = :email";
$select = $conn->prepare($sql);
$select->execute(array(
    ':email' => $email,
));
$result = $select->fetch(PDO::FETCH_ASSOC);

// fermeture co
$conn = null;

?>

<h1>Bonjour <?= $result["prenom"] ?></h1>