const UserController = require("../controllers/userControler");
const AuthController = require("../controllers/auth.controller/auth.controller");

const userRouter = require("express").Router();

userRouter.route("/registration").post(AuthController.registration)
userRouter.route("/login").post(AuthController.login)
userRouter.route("/refresh").post(AuthController.refresh)
userRouter.route("/").post(UserController.addUserWithTolken)

module.exports = userRouter