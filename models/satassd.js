const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//if brand or capacity or name is null, remove from list
let satassdSchema = new Schema({
  price: String,
  name: String,
});

module.exports = satassdSchema;
