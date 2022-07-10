// import necessary modules
const express = require('express');
const sequelize = require('./config/connection');
const path = require('path');
const routes = require('./controllers/');//import all the routes
const exhbs = require('express-handlebars'); // import express handlebars and set it to exhbs
const helpers = require('./utils/helpers'); // get the helpers for handlebar
const hbs = exhbs.create({helpers}) // create an instance of exhbs and set it to hbs
const session = require('express-session') // import express-session
const SequelizeStore = require('connect-session-sequelize')(session.Store); //import classes to store user sessions.

// make an instance of the session storage
const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUnitialized: true,
  rolling: true,
  cookie: {
    // session expires in 5 min
    maxAge: 300 * 1000
  },
  store: new SequelizeStore({
    db: sequelize
  })
};

// declare necessary variables
const app = express();
PORT = process.env.PORT || 3001;


// use express middlwears
app.use(express.static(path.join(__dirname, 'public'))); // serve the public folder
app.use(express.json()); // convert incoming req to JSON format
app.use(express.urlencoded({extended: true}));// parse objects
// use middlewears to set the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess)); // turn on the session.

app.use(routes); // turn on all the routes.



// initiate the port

sequelize.sync({ force: false }).then(() => {
   app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
 });