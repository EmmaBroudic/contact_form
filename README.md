# contact_form
// Construire l'image Docker à partir de n'importe quel poste
// Construire l'image Docker
> 1. docker build -t contact_form .

// Vérifier que l'image Docker a bien été construire
> 2. docker images

// Compose-up docker
> 3. docker-compose up

// Forcer le rebuild
> 4. docker-compose up --force-recreate --build

// Connecter le postgreclient à la base de données
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

---

// Article utile
https://www.sfeir.dev/back/dockeriser-une-application-nodejs-pas-a-pas/

// Etapes effectuées pour créer le projet et l'environnement de travail (Docker, Node,TypeScript)
// Initialiser le projet
> npm init -y

// Construire l'image Docker
> docker build -t contact_form .

// Vérifier que l'image Docker a bien été construire
> docker images

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
> docker-compose up