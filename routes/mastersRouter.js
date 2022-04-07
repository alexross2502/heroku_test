const Router = require("express");
const router = new Router();
const mastersController = require("../controllers/mastersController");

router.post("https://intership-alex.herokuapp.com/", mastersController.create);
router.get("https://intership-alex.herokuapp.com/", mastersController.getAll);
router.delete(
  "https://intership-alex.herokuapp.com/:id",
  mastersController.destroy
);

module.exports = router;
