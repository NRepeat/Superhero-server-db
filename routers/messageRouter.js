const messageRouter = require("express").Router();
const MessageController = require("../controllers/messageController");


messageRouter.route("/").post(MessageController.createMessage)

module.exports = messageRouter