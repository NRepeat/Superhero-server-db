const UserController = require("../controllers/userControler");

const userRouter = require("express").Router();

userRouter.route("/registration").post(UserController.createUser)

module.exports = userRouter