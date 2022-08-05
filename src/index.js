import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());


app.listen(5000, '127.0.0.1', () => {
    console.log('Server is listening on port 5000.');
});