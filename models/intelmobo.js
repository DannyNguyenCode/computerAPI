const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//if name or platform is null, remove from list
let intelmoboSchema = new Schema({
  price: String,
  name: String,
});

module.exports = intelmoboSchema;
