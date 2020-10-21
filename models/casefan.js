const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//brand is null, regex to get brand from name
let casefanSchema = new Schema({
  price: String,
  name: String,
});

module.exports = casefanSchema;
