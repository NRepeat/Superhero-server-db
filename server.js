const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
const { Server } = require("socket.io");

const io = new Server (server)
io.on("connection",(socket)=>{
  console.log("user conected")
  socket.on("newMessage" ,async (newMessage)=>{
cos
  })
})
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
