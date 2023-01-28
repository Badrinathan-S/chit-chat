const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();
const app = express();

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("api is running!");
});

app.use("/api/user", userRoutes);

app.listen(PORT, console.log("server started"));
