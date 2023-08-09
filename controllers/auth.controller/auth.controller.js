const createHttpError = require("http-errors");
const { user } = require("../../models");
const jwt = require("jsonwebtoken")
const AuthService = require('../../serves/auth.service');
class AuthController {
  static async registration(req, res, next) {
    const { body } = req;

    try {
      const newUser = await user.create(body);
      console.log(  AuthService)
      const userWithToken = await AuthService.createSession(newUser);
      res.send({ data: newUser });
    } catch (error) {
      next(error);
    }
  }
  static async login(req, res, next) {
    const { body:{password,email} } = req;
   
    try {
        const userData = await user.findOne({ email });
        console.log(userData.password)
      if (!userData) {
        return next(createHttpError(404, 'Email or password is invalid'));
      }
      // 2. перевірити збіг паролів
      if (password !== userData.password) {
        return next(createHttpError(404, 'Email or password is invalid'));
      }
      res.send({ data: userData });
    } catch (error) {
        next(error)
    }

  }
  static async refresh() {}
}
module.exports = AuthController