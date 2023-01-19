<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job03-jour04</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
            margin-top: 2%;
        }

        th,
        td {
            text-align: center;
            padding: 8px;
            border: 1px solid #ddd;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2
        }

        th {
            background-color: #4CAF50;
            color: white;
        }
    </style>
</head>

<body>
    <h1>Job03-jour04</h1>
    <h2>Fetch-Formulaire</h2>

    <form action="">
        <label for="id">Id</label>
        <input type="text" name="id" id="id">
        <label for="name">Nom (français ou anglais)</label>
        <input type="text" name="name" id="name">
        <label for="type">Type</label>
        <select name="type" id="type">
            <option value="">--Choisissez un option ou non --</option>
            <option value="Grass">Plante</option>
            <option value="Poison">Poison</option>
            <option value="Fire">Feu</option>
            <option value="Flying">Vol</option>
            <option value="Water">Eau</option>
            <option value="Bug">Insecte</option>
            <option value="Normal">Normal</option>
            <option value="Electric">Electrique</option>
            <option value="Ground">Sol</option>
            <option value="Fairy">Fée</option>
            <option value="Fighting">Combat</option>
            <option value="Psychic">Psy</option>
            <option value="Rock">Roche</option>
            <option value="Ghost">Spectre</option>
            <option value="Ice">Glace</option>
            <option value="Dragon">Dragon</option>
            <option value="Dark">Ténèbres</option>
            <option value="Steel">Acier</option>
        </select>
        <input type="button" id="filtrer" value="Filtrer">

    </form>

    <div id="resultat">
        <table>
            <thead>
                <tr>
                    <th colspan="3">Pokemon</th>
                    <th colspan="2">Type(s)</th>
                    <th colspan="6">Caractéristiques</th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Nom (français)</th>
                    <th>Nom (anglais)</th>
                    <th>1er type</th>
                    <th>2ème type</th>
                    <th>HP</th>
                    <th>Attaque</th>
                    <th>Défense</th>
                    <th>Attaque Spé</th>
                    <th>Défense Spé</th>
                    <th>Vitesse</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>


    <!-- <script src="../../jquery-3.6.3.min.js"></script> mieux de mettre ces liens ici d'après le dernier lien du sujet -->
    <script src="script.js"></script>
</body>

</html>