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


/*app.get('/', (req: Request, res: Response) => {
  res.send('Bienvenue sur mon serveur TypeScript !');
});*/

app.get('/', (req: Request, res: Response) => {
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
    await client.connect();

    const userFirstname = req.body.User_Firstname;
    const userSurname = req.body.User_Surname;
    const userEmail = req.body.User_Email;
    const messageTitle = req.body.Message_Title;
    const messageText = req.body.Message_Text;

    // Expressions régulières pour les validations
    const nameRegex = /^[a-zA-Z\-]{1,50}$/; // Contient moins de 50 caractères et autorise uniquement les lettres de l'alphabet et le tiret (-)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Valide l'adresse email
    const titleRegex = /^.{1,100}$/; // Contient moins de 100 caractères
    const textRegex = /^.{1,400}$/; // Contient moins de 400 caractères

    // Vérification des validations avec les expressions régulières
    if (!nameRegex.test(userFirstname)) {
      return res.status(400).send('Le prénom est invalide');
    }
    if (!nameRegex.test(userSurname)) {
      return res.status(400).send('Le nom de famille est invalide');
    }
    if (!emailRegex.test(userEmail)) {
      return res.status(400).send('L\'adresse email est invalide');
    }
    if (!titleRegex.test(messageTitle)) {
      return res.status(400).send('Le titre du message est invalide');
    }
    if (!textRegex.test(messageText)) {
      return res.status(400).send('Le texte du message est invalide');
    }

    const insertQuery = `INSERT INTO message (User_Firstname, User_Surname, User_Email, Message_Title, Message_Text)
                         VALUES ($1, $2, $3, $4, $5)`;
    const values = [userFirstname, userSurname, userEmail, messageTitle, messageText];

    await client.query(insertQuery, values);
    console.log('Nouvel enregistrement créé avec succès');
    res.send('Nouvel enregistrement créé avec succès');
  
  } catch (error) {
    console.error('Erreur lors de l\'insertion des données :', error);
    res.status(500).send(`Erreur lors de l'insertion des données : ${error}`);
  
  } finally {
    await client.end();
  }
});


// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});