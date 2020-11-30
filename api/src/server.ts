import 'reflect-metadata';
import express from 'express';

import './database';
import routes from './routes';
import uploadConfig from './config/upload';

import { PORT, HOST } from './utils/config';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);
app.get('/', async (request, response) => {
  response.json('Bem vindo a API do Native Market !!! =D');
});

const DateNow = Date().toString();
app.listen(PORT, () => {
  console.log('⌚ Server starting');
  console.log(`🚀 Server started on ${HOST}${PORT} at ${DateNow}`);
});
