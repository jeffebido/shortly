import express from 'express';
import cors from 'cors';

import authRouter from './routes/authRouter.js';
import urlsRouter from './routes/urlsRouter.js';
import usersRouter from './routes/usersRouter.js';
import rankingRouter from './routes/rankingRouter.js';

const app = express();

app.use(express.json());

app.use(cors());

app.use(authRouter);
app.use(urlsRouter);
app.use(usersRouter);
app.use(rankingRouter);


app.listen(5000, '127.0.0.1', () => {
    console.log('Server is listening on port 5000.');
});