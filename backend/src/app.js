const express = require('express');
const logger = require('morgan');
const session = require('cookie-session');
const cookieParser = require('cookie-parser');
const handlers = require('./handlers');
const Database = require('./database');
const {getRedisClient} = require('./redisClient');
const {CLIENT_ID, CLIENT_SECRET, REDIRECT_URI} = require('../config');

const app = express();
const redisClient = getRedisClient();
const db = new Database(redisClient);

app.locals = {CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, db};

app.use(handlers.attachDetails);

app.use(express.json());
app.use(cookieParser());
app.use(logger('dev'));
app.use(express.static('public', {index: false}));
app.use(express.urlencoded({extended: true}));

app.set('sessionMiddleware', session({secret: 'key'}));
app.use((...args) => app.get('sessionMiddleware')(...args));

app.get('/api/isLoggedIn', handlers.isLoggedIn);
app.get('/api/appInfo', handlers.getAppInfo);
app.get('/callback', handlers.getUserData);
app.get('/logout', handlers.logout);

module.exports = {app};
