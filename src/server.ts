import { Client } from 'pg';
import express, { Request, Response } from 'express';
import * as path from 'path';
import bodyParser from 'body-parser';

//const express = require("express");
const app = express();
const port = 3000;

const dbConfig = {
  user: 'adminuser',
  password: 'adminpassword',
  database: 'mydatabase',
  host: 'postgresdb', 
  port: 5432, // Port par défaut de PostgreSQL
};

// Obtenir le chemin absolu du répertoire des vues à partir du répertoire de travail actuel
const viewsPath = path.resolve(process.cwd(), 'src', 'views');

// Définir le moteur de modèle Pug et l'emplacement des vues
app.set('views', viewsPath);
app.set('view engine', 'pug');

// Définir le dossier des fichiers statiques (CSS, JavaScript, images, etc.)
app.use(express.static(path.resolve(process.cwd(), 'src', 'styles')));

// Définir le routeur pour la page d'accueil
//app.use('/', indexRouter);


app.get('/', (req: Request, res: Response) => {
  res.send('Bienvenue sur mon serveur TypeScript !');
});

app.get('/home', (req: Request, res: Response) => {
  // Utilisez le nom du fichier Pug sans extension
  res.render('home', { pageTitle: 'Home' });
});

app.get('/form', (req: Request, res: Response) => {
  // Utilisez le nom du fichier Pug sans extension
  res.render('form', { pageTitle: 'Form' });
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/form', async (req, res) => {
  
  const client = new Client(dbConfig);

  try {
    // Connexion au client PostgreSQL
    await client.connect();

    // Données du formulaire
    //const messageTitle = req.body.Message_Title;
    const messageText = req.body.Message_Text;

    // Requête SQL pour insérer les données dans la table
    const insertQuery = `INSERT INTO message (Message_Text)
                         VALUES ($1)`;

    // Paramètres à passer à la requête
    const values = [messageText];

    // Exécution de la requête d'insertion
    await client.query(insertQuery, values);

    console.log('Nouvel enregistrement créé avec succès');
    res.send('Nouvel enregistrement créé avec succès');
  
  } catch (error) {
    
    console.error('Erreur lors de l\'insertion des données :', error);
    
    res.status(500).send(`Erreur lors de l'insertion des données : ${error}`);
  
  } finally {
    // Fermeture de la connexion à la base de données
    await client.end();
  }
});


// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});