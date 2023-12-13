# contact_form
https://www.sfeir.dev/back/dockeriser-une-application-nodejs-pas-a-pas/

// Initialiser le projet
> npm init -y

// Construire l'image Docker
> 1. docker build -t contact_form .

// Vérifier que l'image Docker a bien été construire
> 2. docker images

// Ajouter les éléments nécessaires dans la partie Script
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node dist/server.js",
    "dev": "nodemon server.ts",
    "build": "tsc"
  },

// Installer TypeScript express node
> npm install express typescript @types/node @types/express ts-node nodemon --save-dev

// Installer TypeScript - redondant ?
> npm install typescript --save-dev

// Ajouter
// Vérifier que le serveur fonctionne
> npm run dev

// Builder TypeScript
> npm run build

// Installer pug
> npm install pug

// Compose-up docker
> 3. docker-compose up

// Forcer le rebuild
> 4. sdocker-compose up --force-recreate --build

// Postgreclient
Url : http://localhost:8080/
Sélectionner "server" -> cliquer droit -> nouveau -> server
Compléter onglet Général ->
> Nom : contactform
Compléter onglet Connexion ->
> Nom d'hôte : postgresdb
> Port : 5432
> Base de données : mydatabase
> Nom utilisateur : adminuser
> Mot de passe : adminpassword

// Faire des requêtes dans le postgres client
> Outils -> éditeur de requêtes