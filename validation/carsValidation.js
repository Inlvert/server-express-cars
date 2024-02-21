const yup = require("yup");

const CAR_CREATION_SCHEMA = yup.object({
  producer: yup.string().required(),
  model: yup.string().required(),
  yearOfProdaction: yup.string().required(),
  engineVolume: yup.string().required(),
  typeOfCarBody: yup.string().required(),
  isElectric: yup.boolean().required(),
});

module.exports = CAR_CREATION_SCHEMA;