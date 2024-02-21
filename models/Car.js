const fs = require("fs").promises;
const path = require("path");

const carDbPath = path.resolve(__dirname, "..", "db", "cars.json");

class Car {
  constructor(carData) {
    const {producer, model, yearOfProdaction, engineVolume, typeOfCarBody, electric} = carData;

    this.producer = producer;
    this.model = model;
    this.yearOfProdaction = yearOfProdaction;
    this.engineVolume = engineVolume;
    this.typeOfCarBody = typeOfCarBody;
    this.electric = electric;

    return Promise.resolve(this);
  }

  static async create(carData) {
    const carDBString = await fs.readFile(carDbPath, "utf-8");

    const carDB = carDBString ? JSON.parse(carDBString) : [];

    const newCar = await new Car(carData);

    newCar.id = Date.now();

    carDB.push(newCar);

    await fs.writeFile(carDbPath, JSON.stringify(carDB, null, 4));

    return newCar;
  }

  static async findAll() {
    const carDBString = await fs.readFile(carDbPath, "utf-8");

    const carDB = carDBString ? JSON.parse(carDBString) : [];

    return carDB;
  }

  static async findByid(id) {
    const carDBString = await fs.readFile(carDbPath, "utf-8");

    const carDB = carDBString ? JSON.parse(carDBString) : [];

    const foundCar = carDB.find((user, index, arr) => user.id === id);

    return foundCar;

    // if (foundCar) {
    //   return foundCar;
    // } else {
    //   throw new Error("Car not found");
    // }
  }

  static async deleteById(id) {
    const carDBString = await fs.readFile(carDbPath, "utf-8");

    const carDB = carDBString ? JSON.parse(carDBString) : [];

    const foundCar = carDB.find((user, index, arr) => user.id === id);

    if(foundCar) {

      const newCarDB = carDB.filter((user) => user.id !== id);
  
      await fs.writeFile(carDbPath, JSON.stringify(newCarDB, null, 4));
  
      return foundCar;

    } else {

      throw new Error("Car not found");

    }

  }

  static async updateById(id, newValues) {
    const carDBString = await fs.readFile(carDbPath, "utf-8");

    const carDB = carDBString ? JSON.parse(carDBString) : [];

    const foundCar = carDB.find((user, index, arr) => user.id === id);

    if (foundCar) {
      const carValuesToUpdate = Object.entries(newValues);

      for (const [key, value] of carValuesToUpdate) {
        foundCar[key] = value;
      }

      await fs.writeFile(carDbPath, JSON.stringify(carDB, null, 4));
      
    } else {
      throw new Error("Car not found");
    }
  }

}

module.exports = Car;
