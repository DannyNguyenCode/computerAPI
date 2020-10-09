const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let amdgpuSchema = new Schema({
  price: String,
  name: String,
  brand: String,
});

module.exports = amdgpuSchema;
