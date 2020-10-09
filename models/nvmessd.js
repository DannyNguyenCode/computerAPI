const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//if brand or series or name is null, remove from list
let nvmessdSchema = new Schema({
  price: String,
  name: String,
  capacity: String,
  brand: String,
  series: String,
});

module.exports = nvmessdSchema;
