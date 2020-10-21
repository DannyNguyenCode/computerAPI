const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//motherboard and/or mobo are null, regex to get them from name
let casesSchema = new Schema({
  price: String,
  name: String,
});

module.exports = casesSchema;
