const createHttpError = require("http-errors");
const { superhero, user, UserToken } = require("../models");
module.exports.createUser = async (req, res, next) => {
  try {
    const {
      body: { superheroId, ...userData },
    } = req;

    if (!superheroId) {
      // return next(createHttpError(404,"superhero do not exist"))
      const newUser = await user.create(userData);
      res.send({ data: newUser });
    }
    const superheros = await superhero.findByPk(superheroId);
    const newUser = await user.create(userData);

    await newUser.addSuperheros(superheros);
    res.send({ data: newUser });
  } catch (error) {
    next(error);
  }
};
module.exports.addUserWithTolken = async (req, res, next) => {
  try {
    const { body } = req;
    console.log(body);
    const UwT = await UserToken.create(body);
    console.log(UwT);
    res.send({ data: UwT });
  } catch (error) {
    next(error);
  }
};
