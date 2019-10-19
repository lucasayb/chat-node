const express = require("express");
const path = require("path");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const ejs = require("ejs");

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejs.renderFile);

app.get("/", (req, res) => {
  res.render("index.html.ejs");
});

io.on('connection', (socket) => {
  console.log("A user is connected", socket.id)
})

http.listen(3433, () => {
  console.log("Server running at port 3433!");
});
