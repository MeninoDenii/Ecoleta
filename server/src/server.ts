import express from 'express';
import routes from './routes';
import path from 'path';

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);
