const Router = require("express");
const router = new Router();
const adminRouter = require("./adminRouter");
const clientsRouter = require("./clientsRouter");
const mastersRouter = require("./mastersRouter");
const reservationRouter = require("./reservationRouter");
const townsRouter = require("./townsRouter");

router.use("https://intership-alex.herokuapp.com/admin", adminRouter);
router.use("https://intership-alex.herokuapp.com/clients", clientsRouter);
router.use("https://intership-alex.herokuapp.com/masters", mastersRouter);
router.use(
  "https://intership-alex.herokuapp.com/reservation",
  reservationRouter
);
router.use("https://intership-alex.herokuapp.com/towns", townsRouter);

module.exports = router;
