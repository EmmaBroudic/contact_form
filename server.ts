import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Bienvenue sur mon serveur TypeScript !');
});

app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});