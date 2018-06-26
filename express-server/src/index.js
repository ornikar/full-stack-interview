import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import api from './api';

let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors());

app.use(bodyParser.json());

// api router
app.use('/api', api());

app.server.listen(process.env.PORT || 8080, () => {
  console.log(`Started on port ${app.server.address().port}`);
});

export default app;
