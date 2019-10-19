const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*"
  })
);
var channels = [
  {
    id: "channel-1",
    name: "CodeBy",
    createdAt: "19 de Outubro de 2019",
    image: "/images/codeby.jpg",
    messages: []
  },
  {
    id: "channel-2",
    name: "Hibiro",
    createdAt: "19 de Outubro de 2019",
    image: "/images/hibiro.png",
    messages: []
  }
];

selectedChannel = channelId => {
  return channels.find(selectedChannel => selectedChannel.id === channelId);
};

app.get("/", (req, res) => {
  res.send({ message: "Connected" });
});

app.get("/channels", (req, res) => {
  res.send(channels);
});

io.on("connection", socket => {
  console.log("connection start", socket.id);
  socket.on("subscribe", channel => {
    socket.emit("loadMessages", { messages: selectedChannel(channel).messages });
    console.log("joined channel", channel);
    socket.join(channel);
  });

  socket.on("unsubscribe", channel => {
    console.log("leaving channel", channel);
    socket.leave(channel);
  });

  socket.on("send", function(data) {
    console.log(channels);
    console.log(data);
    selectedChannel(data.channel).messages.push(data);
    io.in(data.channel).emit("message", data);
  });
});

http.listen(3433, () => {
  console.log("Server running at port 3433!");
});
