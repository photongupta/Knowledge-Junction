const express = require('express');
const logger = require('morgan');
const session = require('cookie-session');
const cookieParser = require('cookie-parser');
const handlers = require('./handlers');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(logger('dev'));
app.use(express.static('public', {index: false}));
app.use(express.urlencoded({extended: true}));

app.set('sessionMiddleware', session({secret: 'key'}));
app.use((...args) => app.get('sessionMiddleware')(...args));

app.post('/api/userData', handlers.getUserData);
// app.post('/signup', handlers.signup);
// app.post('/validateLogin', handlers.validateLogin);
// app.post('/logOut', handlers.logOut);

module.exports = {app};
