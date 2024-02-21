const CAR_CREATION_SCHEMA = require("../validation/carsValidation");


const carValidation = async (req, res, next) => {
  try {
    const car = await CAR_CREATION_SCHEMA.validate(req.body);
    req.car = car;
    next();
  } catch (error) {
    res.send("error happened");
  }
};

module.exports.carValidation = carValidation;