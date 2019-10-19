const express = require("express");
const path = require("path");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.get("/messages", (req, res) => {
  res.render();
});

io.on('connection', (socket) => {
  console.log("A user is connected", socket.id)
})

http.listen(3433, () => {
  console.log("Server running at port 3433!");
});
