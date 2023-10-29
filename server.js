// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const session = require('express-session');
const path = require('path');
const hbs = exphbs.create({});

const SequelizeStore = require('connect-session-sequelize')(session.Store)

const sessionOptions =  {
    secret: process.env.SESSION_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
        expiration: 60000 * 60,
        checkExpirationInterval: 60000 * 5
    })
}

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set up middleware
app.use(express.json())
app.use(session(sessionOptions))

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers'));

// Sync database
sequelize.sync({force: false})

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
