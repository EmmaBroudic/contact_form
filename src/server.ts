import express, { Request, Response } from 'express';
import * as path from 'path';

const app = express();
const port = 3000;

// Définir le moteur de modèle Pug et l'emplacement des vues
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Définir le dossier des fichiers statiques (CSS, JavaScript, images, etc.)
app.use(express.static(path.join(__dirname, 'styles')));

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

app.get('/home', (req: Request, res: Response) => {
  res.send('test');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});