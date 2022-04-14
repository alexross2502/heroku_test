const Router = require("express");
const router = new Router();
const adminController = require("../controllers/adminController");

router.post("https://intership-alex.herokuapp.com/", adminController.check);

module.exports = router;
