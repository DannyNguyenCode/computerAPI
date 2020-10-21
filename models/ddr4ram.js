const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ddr4ramSchema = new Schema({
  price: String,
  name: String,
});

module.exports = ddr4ramSchema;
