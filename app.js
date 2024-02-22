const express = require("express");
const { carValidation } = require("./middlewares/validation.mw");
const CarController = require("./controllers/car.controller");
const { Car } = require("./models");

// const router = require('./routers/index');
const app = express();
const PORT = 5500;

app.listen(PORT, () => {
  console.log(`Server started on port : ${PORT}`);
});

app.use(express.json());

// app.use(router);

app.post("/cars", carValidation, CarController.createCars);

app.get("/cars", CarController.getCars);

app.get("/car", CarController.getCarQuery);

app.get("/cars/:carId", CarController.getCar);

app.delete("/cars/:carId", CarController.deleteCar);

app.put("/cars/:carId", CarController.updateCar);
