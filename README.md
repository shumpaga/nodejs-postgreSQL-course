# API Node.js, Express avec BDD PostgreSQL
Création d'une API avec Node.js et Express permettant de récupérer et d'afficher des données stockées dans une base de données PostgreSQL.

## Objectif de l'exercice

Créer une API avec Node.js et Express permettant de récupérer et d'afficher une liste d'utilisateurs stockés dans une base de données PostgreSQL. Chaque utilisateur est caractérisé par un nom et une adresse email.

## Instructions

1. Créer une base de données PostgreSQL contenant une table "users" avec les champs suivants : id (entier auto-incrémenté), name (texte), email (texte).

2. Créer un fichier index.js qui initialise l'application et configure le port d'écoute.

3. Corriger le fichier db/index.js (suivre les instructions dans le fichier).

4. Corriger la route GET "/users" qui permet de récupérer tous les utilisateurs présents dans la base de données.

5. Tester l'API en effectuant une requête GET sur l'URL http://localhost:3000/users. Vous devriez obtenir une réponse JSON contenant la liste des utilisateurs stockés dans la base de données.

## Bonus

Corriger toutes les routes du fichier "routes/user.js".

Bonne chance pour cet exercice !
