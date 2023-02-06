
// These lines of code are requiring several modules in a Node.js application using the Express framework. 
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const crypto = require('crypto');
const routes = require('./controllers');
const helpers = require('./utils/helpers');


// Sequelize library for database connections and the SequelizeStore for session storage in a Connect/Express application.
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Initializing an Express application and setting the port number for the application to listen on.
const app = express();
const PORT = process.env.PORT || 3001;

// Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Creates secret property value for the session
const secret = crypto.randomBytes(64).toString('hex');


// Apply the session middleware to the application.
const sess = {
  secret: secret,
  cookie: {
    maxAge: 900000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/images')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


