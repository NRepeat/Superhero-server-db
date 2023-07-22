const superpowerRouter = require("express").Router();

const superpowerController = require("../controllers/superpowersController");
superpowerRouter.route("/").post(superpowerController.createSuperpower);
module.exports = superpowerRouter;
