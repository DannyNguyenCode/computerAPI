const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//if brand or name is null, remove from list
let nvidiagpuSchema = new Schema({
  price: String,
  name: String,
});

module.exports = nvidiagpuSchema;
