const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const authRouter = require('../routes/authRouter');

const server = express();

// middlewares
server.use(helmet());
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

server.use('/api/auth', authRouter);

// sanity check
server.get('/', (req, res) => {
    res.send('Test!')
});

module.exports = server;