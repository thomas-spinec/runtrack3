<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Job03-jour07</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body>
    <header class="bg-green-300 text-orange-700 text-xl min-h-[80px] ">
        <nav class="pt-6">
            <ul class="flex justify-evenly items-center">
                <li><a href="index.php">Accueil</a></li>
                <li><a href="index.php">Inscription</a></li>
                <li><a href="index.php">Connexion</a></li>
                <li><a href="index.php">Rechercher</a></li>
            </ul>
        </nav>
    </header>
    <h1>Job03-jour07</h1>
    <section class="section">
        <form action="">
            <label for="nom">Nom :</label>
            <input type="text" name="nom" id="nom" />
            <label for="prenom">Prénom :</label>
            <input type="text" name="prenom" id="prenom" />
            <label for="sexe">Sexe :</label>
            <input type="radio" name="sexe" id="sexe" value="Homme" />
            <label for="sexe">Homme</label>
            <input type="radio" name="sexe" id="sexe" value="Femme" />
            <label for="sexe">Femme</label>
            <label for="email">Email :</label>
            <input type="email" name="email" id="email" />
            <label for="password">Password :</label>
            <input type="password" name="password" id="password" />
            <label for="password">Confirmation :</label>
            <input type="password" name="password" id="password" />
            <label for="passions">Passions :</label>
            <input type="checkbox" name="passions" id="passions" value="Informatique" />
            <label for="passions">Informatique</label>
            <input type="checkbox" name="passions" id="passions" value="Voyages" />
            <label for="passions">Voyages</label>
            <input type="checkbox" name="passions" id="passions" value="Lecture" />
            <label for="passions">Lecture</label>
            <input type="checkbox" name="passions" id="passions" value="Sport" />
            <label for="passions">Sport</label>
            <input type="checkbox" name="passions" id="passions" value="Autre" />
            <label for="passions">Autre</label>
            <input type="submit" value="Valider">
        </form>
    </section>

    <footer class="bg-orange-700 text-green-300 text-xl min-h-[70px] absolute inset-x-0 bottom-0 ">
        <ul class="flex justify-evenly items-center pt-5">
            <li><a href="index.php">Accueil</a></li>
            <li><a href="index.php">Inscription</a></li>
            <li><a href="index.php">Connexion</a></li>
            <li><a href="index.php">Rechercher</a></li>
        </ul>
    </footer>
</body>

</html>