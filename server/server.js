const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();
const app = express();

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("api is running!");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  // console.log(req.params.id);

  let singleChat = chats.find((chat) => req.params.id === chat._id);
  console.log(singleChat);
  res.send(singleChat);
});

app.listen(PORT, console.log("server started"));
