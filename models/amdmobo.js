const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let amdmoboSchema = new Schema({
  price: String,
  name: String,
  platform: String,
  socket: String,
});

module.exports = amdmoboSchema;
