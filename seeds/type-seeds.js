const { Type } = require("../models");

const typeData = [
  {
    type_name: "Retro-Sneaker",
  },
  {
    type_name: "High-Top-Sneaker",
  },
  {
    type_name: "High-Top-Boot",
  },
  {
    type_name: "Low-Top-Sneaker",
  },
  {
    type_name: "High-top-Canvas-White",
  },
  {
    type_name: "High-top-Canvas-Black",
  },
  {
    type_name: "flip-flops",
  },
  {
    type_name: "Slide-Shoes",
  },
  {
    type_name: "Toms-Shoes",
  },
];

const seedTypes = () => Type.bulkCreate(typeData);

module.exports = seedTypes;
