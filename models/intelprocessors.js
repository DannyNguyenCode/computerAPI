const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//if price, brand, or name is empty, remove from list
let intelprocessorsSchema = new Schema({
  price: String,
  name: String,
  brand: String,
});

module.exports = intelprocessorsSchema;
