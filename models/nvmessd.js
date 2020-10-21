const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//if brand or series or name is null, remove from list
let nvmessdSchema = new Schema({
  price: String,
  name: String,
});

module.exports = nvmessdSchema;
