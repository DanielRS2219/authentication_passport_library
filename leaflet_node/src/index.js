const express = require('express')
const engine = require('ejs-mate')
const path = require('path');

// initialitations
const app = express();

// Settings
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));

// Routes
app.use(require('./routes/'));

// Statics files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(3000)