import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import rotes from './app/router/Todo-routes';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(rotes);

app.listen(3000, () => {
    console.log('Server started on \nhttp://localhost:3000');
})