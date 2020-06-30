var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var processorSchema = new Schema({
  Model: String,
});

module.exports = processorSchema;
