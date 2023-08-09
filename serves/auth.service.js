const createHttpError = require('http-errors');
const JWTService = require('./jwt.service');
const {  user, UserToken } = require("../models");
module.exports.createSession = async (user) => {
console.log(user)
  // 1. зібрати дані користного навантаження для токену
  const tokenPayload = {
    firstName: user.firstName,
    lastName: user.lastName,
    id: user.id
  }

  // 2. генеруємо токен
  const accessToken = await JWTService.generateAccessToken(tokenPayload);

  // 3. зберігаємо токен до БД
  await UserToken.create({ token: accessToken, userId: user.id});

  // 4. повертаємо токен разом з даними користувача
  return { user, accessToken }
}

module.exports.refreshSession = async (tokenInstance) => {

  const userData = await user.findById(tokenInstance.userId);

  if(!userData) {
    throw createHttpError(404, 'User not found');
  }

  const tokenPayload = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    id: userData.id
  }

  const accessToken = await JWTService.generateAccessToken(tokenPayload);

  // оновили токен в БД
  await Token.findOneAndUpdate({token: tokenInstance.token}, {token: accessToken});

  //  повертаємо токен разом з даними користувача
  return { user, accessToken }
}