const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//if brand or series or name is null, remove from list
let psuSchema = new Schema({
  price: String,
  name: String,
  certification: String,
  brand: String,
});

module.exports = psuSchema;
