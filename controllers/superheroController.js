const { Op } = require("sequelize");

const { superhero, superpowers, SuperhroImg } = require("../models");
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
module.exports.getAllSuperheros = async (req, res, next) => {
  const superheros = await superhero.findAll({
    include: [
      {
        model: superpowers,
      },
      {
        model: SuperhroImg,
      },
    ],
  });
  res.send({ data: superheros });
};

module.exports.getSuperhero = async (req, res, next) => {
  try {
    const {
      params: { superheroId },
    } = req;
    const superheros = await superhero.findByPk(superheroId, {
      include: [
        {
          model: superpowers,
        },
        {
          model: SuperhroImg,
        },
      ],
    });

    res.send({ data: superheros });
  } catch (error) {
    next(error);
  }
};
