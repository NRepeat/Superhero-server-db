const superheroRouter = require("express").Router();

const SuperheroController = require("../controllers/superheroController");
const imageUpload = require('../utils/imageUpload')

superheroRouter
  .route("/")
  .post(SuperheroController.createSuperhero)
  .get(SuperheroController.getSuperhero);

superheroRouter.route("/:sperheroId").get(SuperheroController.getSuperhero);
superheroRouter
  .route("/:sperheroId/img")
  .post(imageUpload.single("image"), SuperheroController.addSuperheroImage);
module.exports = superheroRouter;
