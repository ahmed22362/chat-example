const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)
const PORT = 3000
app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/index.html")
})
io.on("connection", (socket) => {
  console.log("a new user connected.")
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg)
  })
})
server.listen(PORT, () => {
  console.log(`server is listening on ${PORT}....`)
})
