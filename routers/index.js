const express = require("express");
const router = express.Router();
const CarController = require("../controllers/car.controller");

router.route("/cars").post(CarController.createCars);

module.exports = router;
