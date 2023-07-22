const { Op } = require("sequelize");
const { Superhero, Superpowers } = require("../models");
const createHttpError = require("http-errors");

module.exports.createSuperhero = async (req, res, next) => {
  try {
    const { body } = req;
    const superhero = await Superhero.create(body);
    res.send({ data: superhero });
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
