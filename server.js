const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const mongoose = require('./config/mongoose');

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(`Hello World: ${process.env.PORT}`);
});

const taskRoute = require('./routes/taskRoute');

app.use('/v1', taskRoute);

app.listen(process.env.PORT, process.env.HOST);
