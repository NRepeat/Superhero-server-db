const { Op } = require("sequelize");
const { Superhero, superpowers } = require("../models");
const createHttpError = require("http-errors");

module.exports.createSuperhero = async (req, res, next) => {
  try {
    
    const {
      body: { superpower, ...info },
    } = req;
    let superpowerss = { superpowers: superpower }
    console.log(superpowerss)
    const superheroData = await Superhero.create(info);
    const superpowerData = await superpowers.create(superpowerss);
    res.send({ data: superpowerss });
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
