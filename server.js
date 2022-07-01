// import necessary modules
const express = require('express');
const sequelize = require('./config/connection');
const path = require('path');
// const routes = require('./controllers/');//import all the routes


// declare necessary variables
const app = express();
PORT = process.env.PORT || 3001;

// use express middlwears
app.use(express.static(path.join(__dirname, 'path'))); // serve the public folder
app.use(express.json()); // convert incoming req to JSON format
app.use(express.urlencoded({extended: true}));// parse objects
// app.use(routes); // turn on all the routes.


// initiate the port
app.listen(PORT, () => {
   console.log(`Listening on PORT ${PORT}`)
});