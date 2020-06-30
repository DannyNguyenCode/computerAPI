const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const processorSchema = require("./models/processors.js");

module.exports = function (mongoDBConnectionString) {
  let Processor;

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
          Processor = db.model("Amdprocessor", processorSchema);
          resolve();
        });
      });
    },
    getAllProcessors: function () {
      return new Promise(function (resolve, reject) {
        Processor.find()
          .exec()
          .then((processors) => {
            console.log("Processors", processors);
            resolve(processors);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  };
};
