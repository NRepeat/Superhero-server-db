const superheroRouter = require("express").Router();

const SuperheroController = require("../controllers/superheroController");
const imageUpload = require("../utils/imageUpload");

superheroRouter
  .route("/")
  .post(SuperheroController.createSuperhero)
  .get(SuperheroController.getSuperhero);

superheroRouter.route("/:superheroId").get(SuperheroController.getSuperhero);
superheroRouter
  .route("/:superheroId/img")
  .post(imageUpload.single("image"), SuperheroController.addSuperheroImage);
module.exports = superheroRouter;
