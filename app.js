const express = require("express");
// const router = express.Router();
// const { carValidation } = require("./middlewares/validation.mw");
// const CarController = require("./controllers/car.controller");
const router = require("./routers")

// const router = require('./routers/index');
const app = express();
const PORT = 5500;

app.listen(PORT, () => {
  console.log(`Server started on port : ${PORT}`);
});

app.use(express.json());

app.use(router);

app.use (async (err, req, res, next) => {
  res.status(404).send(err.message)
})