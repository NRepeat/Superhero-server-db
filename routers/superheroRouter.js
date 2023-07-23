const superheroRouter = require("express").Router();
const path  = require("path")
const multer = require("multer");
const upload = multer({ dest: path.resolve(__dirname,"../public/images")});
const SuperheroController = require("../controllers/superheroController");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })


superheroRouter
  .route("/")
  .post(SuperheroController.createSuperhero)
  .get(SuperheroController.getSuperhero);

superheroRouter.route("/:sperheroId").get(SuperheroController.getSuperhero);
superheroRouter
  .route("/:sperheroId/img")
  .post( upload.single("image"),SuperheroController.createSuperheroImage);
module.exports = superheroRouter;
