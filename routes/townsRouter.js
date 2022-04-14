const Router = require("express");
const router = new Router();
const townsController = require("../controllers/townsController");

router.get("https://intership-alex.herokuapp.com/", townsController.getAll);
router.post("https://intership-alex.herokuapp.com/", townsController.create);
router.delete(
  "https://intership-alex.herokuapp.com/:id",
  townsController.destroy
);

module.exports = router;
