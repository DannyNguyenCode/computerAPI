const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let amdprocessorsSchema = new Schema({
  price: String,
  name: String,
});

module.exports = amdprocessorsSchema;
