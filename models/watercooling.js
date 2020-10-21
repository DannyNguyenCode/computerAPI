const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//if price or socket or name is null, remove from list
let watercoolingSchema = new Schema({
  price: String,
  name: String,
});

module.exports = watercoolingSchema;
