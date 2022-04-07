const Router = require("express");
const router = new Router();
const reservationController = require("../controllers/reservationController");

router.get(
  "https://intership-alex.herokuapp.com/",
  reservationController.getAll
);
//router.post("/", reservationController.create);
router.delete(
  "https://intership-alex.herokuapp.com/:id",
  reservationController.destroy
);

module.exports = router;
