const express = require('express');
const rootRouter = express.Router();
const superheroRouter = require('./superheroRouter');
const superpowerRouter = require('./superpowerRouter');

rootRouter.use('/superhero', superheroRouter);
// rootRouter.use('/superpower', superpowerRouter);

module.exports = rootRouter;
