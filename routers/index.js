const express = require('express');
const rootRouter = express.Router();
const superheroRouter = require('./superheroRouter');
const superpowerRouter = require('./superpowerRouter');
const superheroImgRouter  =require("./superHeroImgRouter");
const userRouter = require('./userRouter');
const messageRouter = require('./messageRouter');

rootRouter.use('/superhero', superheroRouter);
rootRouter.use('/superpower',  superpowerRouter);
rootRouter.use("/superheroImg",superheroImgRouter)
rootRouter.use("/user",userRouter)
rootRouter.use("/chat",messageRouter)
module.exports = rootRouter;
