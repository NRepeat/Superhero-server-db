const express = require('express');
const rootRouter = express.Router();
const superheroRouter = require('./superheroRouter');
const superpowerRouter = require('./superpowerRouter');
const superheroImgRouter  =require("./superHeroImgRouter")
const {
    validateSuperheroBody,
    validateSuperpowerBody
  } = require('../middlewares/validate.mv');
rootRouter.use('/superhero', superheroRouter);
rootRouter.use('/superpower',  validateSuperpowerBody, superpowerRouter);
rootRouter.use("/superheroImg",superheroImgRouter)

module.exports = rootRouter;
