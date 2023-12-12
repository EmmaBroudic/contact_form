import express, { Request, Response } from 'express';
import * as path from 'path';

const app = express();
const port = 3000;

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

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});