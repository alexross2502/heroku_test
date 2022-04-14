const config = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const app = express();
const sequelize = require("./db");
const models = require("./models/models");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

app.use(cors());
app.use(express.json());
app.use("https://intership-alex.herokuapp.com/api", router);
//обработка ошибок, последний middleware
app.use(errorHandler);

app.get("https://intership-alex.herokuapp.com/", (req, res) => {
  res.render("web/src/index");
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log("start", PORT));
  } catch (e) {
    console.log(e);
  }
};

start();
