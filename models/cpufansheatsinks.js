const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//socket may be null, get it from name, if it is not there, then remove it from list
let cpufansheatsinksSchema = new Schema({
  price: String,
  name: String,
  motherboards: String,
  socket: String,
});

module.exports = cpufansheatsinksSchema;
