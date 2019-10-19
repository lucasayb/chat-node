const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static(path.join(__dirname, "client/build")));

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

app.get("/channels", (req, res) => {
  res.send(channels);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

io.on("connection", socket => {
  console.log("connection start", socket.id);
  socket.on("subscribe", channel => {
    socket.emit("loadMessages", {
      messages: selectedChannel(channel).messages
    });
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

const port = process.env.PORT || 3433;

http.listen(port, () => {
  console.log(`Server running at port ${port}!`);
});
