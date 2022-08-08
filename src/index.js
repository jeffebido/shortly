import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRouter from './routes/authRouter.js';
import urlsRouter from './routes/urlsRouter.js';
import usersRouter from './routes/usersRouter.js';
import rankingRouter from './routes/rankingRouter.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use(authRouter);
app.use(urlsRouter);
app.use(usersRouter);
app.use(rankingRouter);


app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}.`);
});