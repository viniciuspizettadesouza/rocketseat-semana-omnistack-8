//  import express lib
const express = require('express');
//  create object routes
const routes = express.Router();

//  browser always use get to search from api
//  req, requisition from user
//  res, respond to user
routes.get('/', (req, res) => {
    //  http://localhost:3333/?name=Pizetta
    //  pass name parameter through URL
    return res.json({ message: `Olá ${req.query.name}` });
});

//
routes.post('/devs', (req, res) => {
    return res.json( req.body );
});

//  export routes to application
module.exports = routes;
