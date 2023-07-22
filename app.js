const express = require('express');
const app = express();
const bodyParser = express.json();
const router = require('./routers');

app.use(bodyParser);

app.use(router);

module.exports = app;