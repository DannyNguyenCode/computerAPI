const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let amdprocessorsSchema = new Schema({
  price: String,
  name: String,
  brand: String,
  manufacturer: String,
});

module.exports = amdprocessorsSchema;
