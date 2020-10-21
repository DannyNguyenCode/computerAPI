const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let hddSchema = new Schema({
  price: String,
  name: String,
});

module.exports = hddSchema;
