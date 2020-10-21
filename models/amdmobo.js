const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let amdmoboSchema = new Schema({
  price: String,
  name: String,
});

module.exports = amdmoboSchema;
