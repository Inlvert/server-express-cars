const { Car } = require("../models");

module.exports.createCars = async (req, res) => {
  try {
    const { car: carData } = req;

    const car = await Car.create(carData);

    res.send(car);
    console.log(car);
  } catch (error) {
    next(error);
  }
};

module.exports.getCars = async (req, res, next) => {
  const cars = await Car.findAll();
  res.send(cars);
};

module.exports.getCar = async (req, res, next) => {
  try {
    const {
      params: { carId },
    } = req;

    const car = await Car.findByid(+carId);
    res.send(car);
    console.log(car);
  } catch (error) {
    next(error);
  }
};

module.exports.getCarQuery = async (req, res, next) => {
  try {
    const {
      query: { id },
    } = req;

    const car = await Car.findByid(+id);
    res.send(car);
    console.log(id);
  } catch (error) {
    next(error);
  }
};

module.exports.deleteCar = async (req, res, next) => {
  try {
    const {
      params: { carId },
    } = req;

    const car = await Car.deleteById(+carId);
    res.send(car);
    console.log(car);
  } catch (error) {
    next(error);
  }
};

module.exports.updateCar = async (req, res, next) => {
  try {
    const {
      params: { carId },
      body,
    } = req;
    const car = await Car.updateById(+carId, body);
    res.send(car);
    console.log(car);
  } catch (error) {
    next(error);
  }
};
