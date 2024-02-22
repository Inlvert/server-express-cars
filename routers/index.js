const express = require("express");
const router = express.Router();
const { carValidation } = require("../middlewares/validation.mw");
const CarController = require("../controllers/car.controller");

router
  .route("/cars")
  .post(carValidation, CarController.createCars)
  .get(CarController.getCars);

router
  .route("/cars/:carId")
  .get(CarController.getCar)
  .delete(CarController.deleteCar)
  .put(CarController.updateCar);

router.get("/car", CarController.getCarQuery);

module.exports = router;
