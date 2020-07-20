'use strict';

const express = require('express');
const bodyParse = require('body-parser');

const app = express();
const router = express.Router();


// const connectiondb = require('./db/connection');

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:false}));

const connectiondb = require('./api-rest/dbConnection');

const indexRoute = require('./api-rest/routes/index-route');
const personRoute = require('./api-rest/routes/person-route');

app.use('/', indexRoute);
app.use('/person', personRoute);

module.exports = app;