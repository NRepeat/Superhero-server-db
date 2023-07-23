const { Op } = require("sequelize");
const { superhero, superpowers } = require("../models");
const createHttpError = require("http-errors");

module.exports.createSuperhero = async (req, res, next) => {
  try {
    const {
      body: { superpower, ...info },
    } = req;
    const superheroData = await superhero.create(info);
    const superpowerArr = {
      superpower: superpower,
      superheroId: superheroData.dataValues.id,
    };

    const superpowerData = await superpowers.create(superpowerArr);
    res.send({ data: superheroData });
  } catch (error) {
    next(error);
  }
};

module.exports.createSuperheroImage = async (req, res, next) => {
  try {
    const { body, file } = req;
    res.send({ data: body, file });
  } catch (error) {
    next(error);
  }
};
module.exports.getSuperhero = async (req, res, next) => {
  try {
    const {
      params: { sperheroId },
    } = req;
    const superheros = await superhero.findByPk(sperheroId, {
      include: {
        model: superpowers,
      },
    });

    res.send({ data: superheros });
  } catch (error) {
    next(error);
  }
};
