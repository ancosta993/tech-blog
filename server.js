// import necessary modules
const express = require('express');
const sequelize = require('./config/connection');
const path = require('path');
const routes = require('./controllers/');//import all the routes
const exhbs = require('express-handlebars'); // import express handlebars and set it to exhbs
const hbs = exhbs.create({}) // create an instance of exhbs and set it to hbs

// declare necessary variables
const app = express();
PORT = process.env.PORT || 3001;

// use middlewears to set the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// use express middlwears
app.use(express.static(path.join(__dirname, 'public'))); // serve the public folder
app.use(express.json()); // convert incoming req to JSON format
app.use(express.urlencoded({extended: true}));// parse objects
app.use(routes); // turn on all the routes.


// initiate the port

sequelize.sync({ force: false }).then(() => {
   app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
 });