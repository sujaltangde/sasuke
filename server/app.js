const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

app.use(express.json({ limit: "10mb" }));

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

const user = require("./routes/userRoutes");
const surplus = require("./routes/surplusRoutes");

app.use("/api/", user);
app.use("/surplus/", surplus);

app.get("/", (req, res) => {
  res.json("I am working");
});

module.exports = app;


