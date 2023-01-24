<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Job04-jour07</title>
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
    <h1 class="text-xl my-4 mx-40">Job04-jour07</h1>
    <section class="mx-40 py-6 text-xl shadow-2xl">
        <form action="" class=" grid grid-cols-4 gap-x-2 gap-y-6 justify-items-center">
            <div class="col-span-2">
                <label for="nom">Nom :</label>
                <input type="text" name="nom" id="nom" class="border border-gray-400 border-solid rounded-md" />
            </div>
            <div class="col-span-2">
                <label for="prenom">Prénom :</label>
                <input type="text" name="prenom" id="prenom" class="border border-gray-400 border-solid rounded-md" />
            </div>
            <div class="col-start-2 col-span-2">
                <label for="sexe">Sexe :</label>
            </div>
            <div class="col-start-2 col-span-1">
                <input type="radio" name="sexe" id="sexe" value="Homme" />
                <label for="sexe"><img class="w-8" src="homme.png" alt="homme"></label>
            </div>
            <div class="col-start-3 col-span-1">
                <input type="radio" name="sexe" id="sexe" value="Femme" />
                <label for="sexe"><img class="w-5" src="femme.png" alt="femme"></label>
            </div>
            <div class="col-start-2 col-span-2">
                <label for="email"><img class="w-12" src="mail.png" alt=""></label>
            </div>
            <div class="col-start-2 col-span-2">
                <input type="email" name="email" id="email" class="border border-gray-400 border-solid rounded-md" />
            </div>
            <div class="col-span-2">
                <label for="password">Password :</label>
                <input type="password" name="password" id="password" class="border border-gray-400 border-solid rounded-md" />
            </div>
            <div class="col-span-2">
                <label for="password">Confirmation :</label>
                <input type="password" name="password" id="password" class="border border-gray-400 border-solid rounded-md" />
            </div>
            <div class="col-span-4">
                <label for="passions">Passions :</label>
            </div>
            <div class="col-start-1 col-span-1">
                <input type="checkbox" name="passions" id="passions" value="Informatique" />
                <label for="passions">Informatique</label>
            </div>
            <div class="col-start-2 col-span-1">
                <input type="checkbox" name="passions" id="passions" value="Voyages" />
                <label for="passions">Voyages</label>
            </div>
            <div class="col-start-3 col-span-1">
                <input type="checkbox" name="passions" id="passions" value="Sport" />
                <label for="passions">Sport</label>
            </div>
            <div class="col-start-4 col-span-1">
                <input type="checkbox" name="passions" id="passions" value="Lecture" />
                <label for="passions">Lecture</label>
            </div>
            <div class="col-start-2 col-span-2">
                <input type="submit" value="Valider" class="cursor-pointer py-1 px-6 border border-gray-400 border-solid rounded-md hover:bg-gray-400 hover:duration-300">
            </div>
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