//  import express lib
const express = require('express');

// create server express
const server = express();

// browser always use get to search from api
// req, requisition from user
// res, respond to user
server.get('/', (req, res) => {
    return res.send('Hello World');
});

// server port
server.listen(3333);