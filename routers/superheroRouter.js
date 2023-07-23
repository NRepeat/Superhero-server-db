const superheroRouter = require("express").Router();

const superheroController = require("../controllers/superheroController");


superheroRouter.route("/all").get(superheroController.getAllSuperheros);

superheroRouter.route("/").post(superheroController.createSuperhero);
superheroRouter.route("/:superheroId").get(superheroController.getSuperhero).put(superheroController.updateSuperhero);

module.exports = superheroRouter;
