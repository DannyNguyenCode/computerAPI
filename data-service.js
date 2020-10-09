const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const amdgpuSchema = require('./models/amdgpu.js');
const amdMoboSchema = require('./models/amdmobo');
const amdProcessorSchema = require('./models/amdprocessors');
const caseFanSchema = require('./models/casefan');

module.exports = function (mongoDBConnectionString) {
  let Amdgpus;
  let Amdmobos;
  let Amdprocessors;
  let CaseFan;
  return {
    connect: () => {
      return new Promise((resolve, reject) => {
        let db = mongoose.createConnection(mongoDBConnectionString, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        db.on('error ', (err) => {
          reject(err);
        });

        db.once('open', () => {
          Amdgpus = db.model('Amdgpu', amdgpuSchema);
          Amdmobos = db.model('Amdmobo', amdMoboSchema);
          Amdprocessors = db.model('Amdprocessor', amdProcessorSchema);
          CaseFan = db.model('Casefan', caseFanSchema);
          console.log('Connection successfully in connect function');
          resolve();
        });
      });
    },
    getAllAMDGPUs: () => {
      return new Promise((resolve, reject) => {
        Amdgpus.find()
          //.sort({}) //optional "sort" - https://docs.mongodb.com/manual/reference/operator/aggregation/sort/
          .exec()
          .then((gpu) => {
            resolve(gpu);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getAMDGPUsById: (gpuId) => {
      return new Promise((resolve, reject) => {
        Amdgpus.find({ _id: gpuId })
          .limit(1)
          .exec()
          .then((gpu) => {
            resolve(gpu);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getAllAMDmobos: () => {
      return new Promise((resolve, reject) => {
        Amdmobos.find()
          //.sort({}) //optional "sort" - https://docs.mongodb.com/manual/reference/operator/aggregation/sort/
          .exec()
          .then((mobo) => {
            resolve(mobo);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getAMDmobosById: (amdmoboid) => {
      return new Promise((resolve, reject) => {
        Amdmobos.find({ _id: amdmoboid })
          .limit(1)
          .exec()
          .then((mobo) => {
            resolve(mobo);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    getAllAMDProcessors: () => {
      return new Promise((resolve, reject) => {
        Amdprocessors.find()
          //.sort({}) //optional "sort" - https://docs.mongodb.com/manual/reference/operator/aggregation/sort/
          .exec()
          .then((processors) => {
            resolve(processors);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    getAMDProcessorsById: (amdprocessorid) => {
      return new Promise((resolve, reject) => {
        Amdprocessors.find({ _id: amdprocessorid })
          .limit(1)
          .exec()
          .then((proc) => {
            resolve(proc);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getAllCaseFans: () => {
      return new Promise((resolve, reject) => {
        CaseFan.find()
          .exec()
          .then((casefan) => {
            resolve(casefan);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getCaseFanById: (casefanid) => {
      return new Promise((resolve, reject) => {
        CaseFan.find({ _id: casefanid })
          .limit(1)
          .exec()
          .then((casefan) => {
            resolve(casefan);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  };
};
