// env
require('dotenv').config();

// server
const server = require('./api/server');

const port = process.env.PORT || 4500;

server.listen(port, () => console.log(`\n===*Server running on port ${port}*===\n`));