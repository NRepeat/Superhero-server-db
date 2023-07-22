const { Op } = require("sequelize");
const { Superhero, superpowers } = require("../models");
const createHttpError = require("http-errors");

module.exports.createSuperhero = async (req, res, next) => {
  try {
    
    const {
      body: { superpower, ...info },
    } = req;
    const superpowerArr = { superpower: superpower }
    const superheroData = await Superhero.create(info);
    const superpowerData = await superpowers.create(superpowerArr);
    res.send({ data: superpowerData });
  } catch (error) {
    next(error);
  }
};
module.exports.getSuperhero = async (req, res, next) => {
  try {
    const superheros = await Superhero.findAll();

    res.send({ data: superheros });
  } catch (error) {
    next(error);
  }
};
