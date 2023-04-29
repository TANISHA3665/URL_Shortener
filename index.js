import express from 'express';
import path from 'path';

import connectToMongoDB from './connection.js';

import urlRoute from './routes/url.js';
import staticRoute from './routes/staticRouter.js';
import userRoute from './routes/user.js';

const app = express();
const PORT = 8000;

connectToMongoDB('mongodb://127.0.0.1:27017/short-url').then(() => {
  console.log('Mongodb connected');
});

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/url', urlRoute);
app.use('/', staticRoute);
app.use('/user', userRoute);

app.listen(PORT, () => {
  console.log(`Server started at PORT : ${PORT}`);
});
