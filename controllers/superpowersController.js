const { Op } = require("sequelize");
const { Superhero, superpowers } = require("../models");
const createHttpError = require("http-errors");

module.exports.createSuperpower = async (req, res, next) => {
  try {
    const { body } = req;
    const superpower = await superpowers.create(body);
    res.send({ data: superpower });
  } catch (error) {
    next(error);
  }
};