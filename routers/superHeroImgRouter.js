const superheroImgRouter = require("express").Router();
const superHeroImgController = require("../controllers/superHeroImgController");
const imageUpload = require("../utils/imageUpload");

superheroImgRouter
  .route("/:superheroId/img")
  .post(imageUpload.single("image"), superHeroImgController.addSuperheroImage);


  module.exports = superheroImgRouter;