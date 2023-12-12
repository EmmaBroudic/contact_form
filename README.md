# contact_form
https://www.sfeir.dev/back/dockeriser-une-application-nodejs-pas-a-pas/

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

// Forcer le rebuild
> docker-compose up --force-recreate --build