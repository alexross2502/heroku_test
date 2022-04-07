const Router = require("express");
const router = new Router();
const clientsController = require("../controllers/clientsController");

router.get("https://intership-alex.herokuapp.com/", clientsController.getAll);
router.post("https://intership-alex.herokuapp.com/", clientsController.create);
router.delete(
  "https://intership-alex.herokuapp.com/:id",
  clientsController.destroy
);

module.exports = router;
