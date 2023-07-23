const fs = require("fs");
const path = require("path");
const { superhero, superpowers, SuperhroImg } = require("../models");
const createHttpError = require("http-errors");
module.exports.addSuperheroImage = async (req, res, next) => {
    try {
      const {
        file: { filename },
        params: { superheroId },
      } = req;
      console.log(superheroId);
      const superherIndex = await superhero.findByPk(superheroId);
  
      if (!superherIndex) {
        const filePath = path.resolve(__dirname, `../public/images/${filename}`);
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error("Error while deleting the file:", err);
          } else {
            console.log("File has been successfully deleted.");
          }
        });
        return next(createHttpError(404, "User doesnt exist"));
      }
      const superhroImg = await SuperhroImg.create({
        superheroImgPath: filename,
        superheroId: superheroId,
      });
      res.send({ data: superhroImg });
    } catch (error) {
      next(error);
    }
  };