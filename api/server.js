const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const { logged } = require('../database/helpers/logged');
const { auth } = require('../database/helpers/auth');
const authRouter = require('../routes/authRouter.js');
const todoRouter = require('../routes/todoRouter.js');

const server = express();

// middlewares
server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(morgan('dev'));

server.use('/', authRouter);
server.use('/todos', logged, auth, todoRouter);

// sanity check
server.get('/', async (req, res) => {
    res.send('Welcome to the WunderList API')
});

module.exports = server;