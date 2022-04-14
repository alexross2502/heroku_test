const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const app = express();


app.use(cors());
app.use(express.json());


app.get("https://intership-alex.herokuapp.com/", (req, res) => {
  res.render("https://www.youtube.com/");
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
