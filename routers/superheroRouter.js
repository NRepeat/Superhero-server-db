const superheroRouter = require("express").Router();
const path = require("path");
const multer = require("multer");
const SuperheroController = require("../controllers/superheroController");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../public/images"));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

superheroRouter
  .route("/")
  .post(SuperheroController.createSuperhero)
  .get(SuperheroController.getSuperhero);

superheroRouter.route("/:sperheroId").get(SuperheroController.getSuperhero);
superheroRouter
  .route("/:sperheroId/img")
  .post(upload.single("image"), SuperheroController.createSuperheroImage);
module.exports = superheroRouter;
