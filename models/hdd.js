const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let hddSchema = new Schema({
  price: String,
  name: String,
  capacity: String,
  brand: String,
});

module.exports = hddSchema;
