const superheroRouter = require('express').Router();

const SuperheroController = require("../controllers/superheroController");
superheroRouter.route("/").post(SuperheroController.createSuperhero);
module.exports = superheroRouter;
