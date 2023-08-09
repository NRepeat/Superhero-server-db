const { superhero, user, UserToken, UserMessage } = require("../models");

module.exports.createMessage = async (req, res, next) => {
  try {
    const { body } = req;

    const newMessage = await UserMessage.create(body);

    res.send({ data: newMessage });
  } catch (error) {
    next(error);
  }
};
