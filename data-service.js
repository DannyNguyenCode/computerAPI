const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const amdProcessorSchema = require("./models/amdprocessors.js");
const intelProcessorSchema = require("./models/intelprocessors.js");

module.exports = function (mongoDBConnectionString) {
  let intelProcessors;
  let amdProcessors;
  return {
    connect: function () {
      return new Promise(function (resolve, reject) {
        let db = mongoose.createConnection(mongoDBConnectionString, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });

        db.on("error ", (err) => {
          reject(err);
        });

        db.once("open", () => {
          amdProcessors = db.model("Amdprocessor", amdProcessorSchema);
          intelProcessors = db.model("Intelprocessors", intelProcessorSchema);
          resolve();
        });
      });
    },
    getAMDProcessors: function () {
      return new Promise(function (resolve, reject) {
        amdProcessors
          .find()
          .exec()
          .then((processors) => {
            resolve(processors);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getIntelProcessors: function () {
      return new Promise(function (resolve, reject) {
        intelProcessors
          .find()
          .exec()
          .then((processors) => {
            resolve(processors);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  };
};
