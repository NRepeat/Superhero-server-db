const express = require('express');
const rootRouter = express.Router();
const superheroRouter = require('./superheroRouter');
const superpowerRouter = require('./superpowerRouter');
const superheroImgRouter  =require("./superHeroImgRouter");
const userRouter = require('./userRouter');

rootRouter.use('/superhero', superheroRouter);
rootRouter.use('/superpower',  superpowerRouter);
rootRouter.use("/superheroImg",superheroImgRouter)
rootRouter.use("/user",userRouter)

module.exports = rootRouter;
