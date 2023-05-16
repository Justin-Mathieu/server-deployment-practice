'use strict';


const express = require('express');
const cors = require('cors');

// create express singleton
const server = express();


// middleware
server.use(cors());
server.use(express.json());

server.get('/', (req, res, next) => {
  res.status(200).send('Working server/Proof of life');
});

server.get('/endpoint', (req, res, next) => {
  res.status(200).send('Endpoint Working!!');
});

server.get('/bad', (req, res, next) => {
  next('Error: endpoint not working');
});

server.use('*', (req, res, next) => {
  res.status(404).send('Not Found');
});

const start = (port) => server.listen(port, () => console.log('listening on port:', port));

module.exports = { start, server };