const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const amdGpuSchema = require('./models/amdgpu.js');
const amdMoboSchema = require('./models/amdmobo');
const amdProcessorSchema = require('./models/amdprocessors');
const caseFanSchema = require('./models/casefan');
const caseSchema = require('./models/cases');
const cpuFansHeatSinksSchema = require('./models/cpufansheatsinks');
const ddr4RamSchema = require('./models/ddr4ram');
const hddSchema = require('./models/hdd');
const intelMoboSchema = require('./models/intelmobo');
const intelProcessorSchema = require('./models/intelprocessors');
const nvidiaGpuSchema = require('./models/nvidiagpu');
const nvmeSsdSchema = require('./models/nvmessd');
const psuSchema = require('./models/psu');
const sataSsdSchema = require('./models/satassd');
const waterCoolingSchema = require('./models/watercooling');

module.exports = function (mongoDBConnectionString) {
  let AmdGpus;
  let AmdMobos;
  let AmdProcessors;
  let CaseFan;
  let Cases;
  let CpuFansHeatSinks;
  let Ddr4Rams;
  let Hdds;
  let IntelMobos;
  let IntelProcessors;
  let NvidiaGpus;
  let NvmeSsds;
  let Psus;
  let SataSsds;
  let WaterCoolings;
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
          AmdGpus = db.model('Amdgpu', amdGpuSchema);
          AmdMobos = db.model('Amdmobo', amdMoboSchema);
          AmdProcessors = db.model('Amdprocessor', amdProcessorSchema);
          CaseFan = db.model('Casefan', caseFanSchema);
          Cases = db.model('Case', caseSchema);
          CpuFansHeatSinks = db.model(
            'CpuFansHeatSink',
            cpuFansHeatSinksSchema
          );
          Ddr4Rams = db.model('Ddr4ram', ddr4RamSchema);
          Hdds = db.model('Harddiskdrive', hddSchema);
          IntelMobos = db.model('Intelmobo', intelMoboSchema);
          IntelProcessors = db.model('Intelprocessor', intelProcessorSchema);
          NvidiaGpus = db.model('Nvidiagpu', nvidiaGpuSchema);
          NvmeSsds = db.model('Nvmessd', nvmeSsdSchema);
          Psus = db.model('Psu', psuSchema);
          SataSsds = db.model('satassd', sataSsdSchema);
          WaterCoolings = db.model('watercooling', waterCoolingSchema);
          console.log('Connection successfully in connect function');
          resolve();
        });
      });
    },
    //
    //AMD graphic card data fetch
    getAllAMDGPUs: () => {
      return new Promise((resolve, reject) => {
        AmdGpus.find()
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
        AmdGpus.find({ _id: gpuId })
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

    updateAMDGPUsByID: (gpuid, gpu) => {
      return new Promise((resolve, reject) => {
        if (Object.keys(gpu).length > 0) {
          AmdGpus.findByIdAndUpdate(
            { _id: gpuid },
            { $set: gpu },
            { multi: false }
          )
            .exec()
            .then((data) => {
              resolve(gpuid);
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          resolve();
        }
      });
    },

    addAMDgpu: (gpu) => {
      return new Promise((resolve, reject) => {
        let newData = new AmdGpus(gpu);
        newData.save((err, addedData) => {
          if (err) {
            reject(err);
          } else resolve(addedData._id);
        });
      });
    },

    //
    //AMD motherboard data fetch
    getAllAMDmobos: () => {
      return new Promise((resolve, reject) => {
        AmdMobos.find()
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
        AmdMobos.find({ _id: amdmoboid })
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

    updateAMDmobosByID: (amdmoboid, mobo) => {
      return new Promise((resolve, reject) => {
        if (Object.keys(mobo).length > 0) {
          AmdGpus.findByIdAndUpdate(
            { _id: amdmoboid },
            { $set: mobo },
            { multi: false }
          )
            .exec()
            .then((data) => {
              resolve(amdmoboid);
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          resolve();
        }
      });
    },

    addAMDmobo: (mobo) => {
      return new Promise((resolve, reject) => {
        let newData = new AmdMobos(mobo);
        newData.save((err, addedData) => {
          if (err) {
            reject(err);
          } else resolve(addedData._id);
        });
      });
    },

    //
    //AMD processors data fetch
    getAllAMDProcessors: () => {
      return new Promise((resolve, reject) => {
        AmdProcessors.find()
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
        AmdProcessors.find({ _id: amdprocessorid })
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

    updateAMDProcessorsByID: (amdprocessorid, processors) => {
      return new Promise((resolve, reject) => {
        if (Object.keys(processors).length > 0) {
          AmdGpus.findByIdAndUpdate(
            { _id: amdprocessorid },
            { $set: processors },
            { multi: false }
          )
            .exec()
            .then((data) => {
              resolve(amdprocessorid);
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          resolve();
        }
      });
    },

    addAMDprocessor: (processor) => {
      return new Promise((resolve, reject) => {
        let newData = new AmdProcessors(processor);
        newData.save((err, addedData) => {
          if (err) {
            reject(err);
          } else resolve(addedData._id);
        });
      });
    },

    //
    //Case fans data fetch
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

    updateCaseFansByID: (casefanid, casefan) => {
      return new Promise((resolve, reject) => {
        if (Object.keys(casefan).length > 0) {
          AmdGpus.findByIdAndUpdate(
            { _id: casefanid },
            { $set: casefan },
            { multi: false }
          )
            .exec()
            .then((data) => {
              resolve(casefanid);
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          resolve();
        }
      });
    },

    addCaseFan: (casefan) => {
      return new Promise((resolve, reject) => {
        let newData = new CaseFan(casefan);
        newData.save((err, addedData) => {
          if (err) {
            reject(err);
          } else resolve(addedData._id);
        });
      });
    },

    //
    //Cases data fetch
    getAllCases: () => {
      return new Promise((resolve, reject) => {
        Cases.find()
          .exec()
          .then((cases) => {
            resolve(cases);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getCaseById: (caseid) => {
      return new Promise((resolve, reject) => {
        Cases.find({ _id: caseid })
          .limit(1)
          .exec()
          .then((cases) => {
            resolve(cases);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    updateCasesByID: (caseid, cases) => {
      return new Promise((resolve, reject) => {
        if (Object.keys(cases).length > 0) {
          AmdGpus.findByIdAndUpdate(
            { _id: caseid },
            { $set: cases },
            { multi: false }
          )
            .exec()
            .then((data) => {
              resolve(caseid);
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          resolve();
        }
      });
    },

    addCase: (cases) => {
      return new Promise((resolve, reject) => {
        let newData = new Cases(cases);
        newData.save((err, addedData) => {
          if (err) {
            reject(err);
          } else resolve(addedData._id);
        });
      });
    },

    //
    //CPU fans and heat sinks data fetch
    getAllCpuFansHeatSinks: () => {
      return new Promise((resolve, reject) => {
        CpuFansHeatSinks.find()
          .exec()
          .then((cpufansheatsink) => {
            resolve(cpufansheatsink);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getCpuFansHeatSinksById: (cpufansheatsinksid) => {
      return new Promise((resolve, reject) => {
        CpuFansHeatSinks.find({ _id: cpufansheatsinksid })
          .limit(1)
          .exec()
          .then((cpufansheatsink) => {
            resolve(cpufansheatsink);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    updateCpuFansHeatSinksByID: (cpufansheatsinksid, cpufansheatsink) => {
      return new Promise((resolve, reject) => {
        if (Object.keys(cpufansheatsink).length > 0) {
          AmdGpus.findByIdAndUpdate(
            { _id: cpufansheatsinksid },
            { $set: cpufansheatsink },
            { multi: false }
          )
            .exec()
            .then((data) => {
              resolve(cpufansheatsinksid);
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          resolve();
        }
      });
    },

    addCpuFansHeatSink: (cpufansheatsink) => {
      return new Promise((resolve, reject) => {
        let newData = new CpuFansHeatSinks(cpufansheatsink);
        newData.save((err, addedData) => {
          if (err) {
            reject(err);
          } else resolve(addedData._id);
        });
      });
    },

    //
    //DDR4 Rams data fetch
    getAllddr4Rams: () => {
      return new Promise((resolve, reject) => {
        Ddr4Rams.find()
          .exec()
          .then((ddr4ram) => {
            resolve(ddr4ram);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getddr4RamById: (ddr4ramsid) => {
      return new Promise((resolve, reject) => {
        Ddr4Rams.find({ _id: ddr4ramsid })
          .limit(1)
          .exec()
          .then((ddr4ram) => {
            resolve(ddr4ram);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    updateddr4RamByID: (ddr4ramsid, ddr4ram) => {
      return new Promise((resolve, reject) => {
        if (Object.keys(ddr4ram).length > 0) {
          AmdGpus.findByIdAndUpdate(
            { _id: ddr4ramsid },
            { $set: ddr4ram },
            { multi: false }
          )
            .exec()
            .then((data) => {
              resolve(ddr4ramsid);
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          resolve();
        }
      });
    },

    addddr4Ram: (ddr4ram) => {
      return new Promise((resolve, reject) => {
        let newData = new Ddr4Rams(ddr4ram);
        newData.save((err, addedData) => {
          if (err) {
            reject(err);
          } else resolve(addedData._id);
        });
      });
    },

    //
    //HDD data fetch
    getAllHdds: () => {
      return new Promise((resolve, reject) => {
        Hdds.find()
          .exec()
          .then((hdd) => {
            resolve(hdd);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getHddById: (hddid) => {
      return new Promise((resolve, reject) => {
        Hdds.find({ _id: hddid })
          .limit(1)
          .exec()
          .then((hdd) => {
            resolve(hdd);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    updateHddByID: (hddid, hdd) => {
      return new Promise((resolve, reject) => {
        if (Object.keys(hdd).length > 0) {
          AmdGpus.findByIdAndUpdate(
            { _id: hddid },
            { $set: hdd },
            { multi: false }
          )
            .exec()
            .then((data) => {
              resolve(hddid);
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          resolve();
        }
      });
    },

    addHdd: (hdd) => {
      return new Promise((resolve, reject) => {
        let newData = new Hdds(hdd);
        newData.save((err, addedData) => {
          if (err) {
            reject(err);
          } else resolve(addedData._id);
        });
      });
    },

    //
    //Intel motherboard data fetch
    getAllIntelMobos: () => {
      return new Promise((resolve, reject) => {
        IntelMobos.find()
          .exec()
          .then((intelmobo) => {
            resolve(intelmobo);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getIntelMoboById: (intelmoboid) => {
      return new Promise((resolve, reject) => {
        IntelMobos.find({ _id: intelmoboid })
          .limit(1)
          .exec()
          .then((intelmobo) => {
            resolve(intelmobo);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    updateIntelMoboByID: (intelmoboid, intelmobo) => {
      return new Promise((resolve, reject) => {
        if (Object.keys(intelmobo).length > 0) {
          AmdGpus.findByIdAndUpdate(
            { _id: intelmoboid },
            { $set: intelmobo },
            { multi: false }
          )
            .exec()
            .then((data) => {
              resolve(intelmoboid);
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          resolve();
        }
      });
    },

    addIntelMobo: (intelmobo) => {
      return new Promise((resolve, reject) => {
        let newData = new IntelMobos(intelmobo);
        newData.save((err, addedData) => {
          if (err) {
            reject(err);
          } else resolve(addedData._id);
        });
      });
    },

    //
    //Intel processors data fetch
    getAllIntelProcessors: () => {
      return new Promise((resolve, reject) => {
        IntelProcessors.find()
          .exec()
          .then((intelprocessors) => {
            resolve(intelprocessors);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getIntelProcessorById: (intelprocessorsid) => {
      return new Promise((resolve, reject) => {
        IntelProcessors.find({ _id: intelprocessorsid })
          .limit(1)
          .exec()
          .then((intelprocessor) => {
            resolve(intelprocessor);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    updateIntelProcessorByID: (intelprocessorsid, intelprocessor) => {
      return new Promise((resolve, reject) => {
        if (Object.keys(intelprocessor).length > 0) {
          AmdGpus.findByIdAndUpdate(
            { _id: intelprocessorsid },
            { $set: intelprocessor },
            { multi: false }
          )
            .exec()
            .then((data) => {
              resolve(intelprocessorsid);
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          resolve();
        }
      });
    },

    addIntelProcessor: (intelprocessor) => {
      return new Promise((resolve, reject) => {
        let newData = new IntelProcessors(intelprocessor);
        newData.save((err, addedData) => {
          if (err) {
            reject(err);
          } else resolve(addedData._id);
        });
      });
    },

    //
    //Nvidia graphic cards data fetch
    getAllNvidiaGPUs: () => {
      return new Promise((resolve, reject) => {
        NvidiaGpus.find()
          .exec()
          .then((nvidiagpu) => {
            resolve(nvidiagpu);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getNvidiaGPUById: (nvidiagpuid) => {
      return new Promise((resolve, reject) => {
        NvidiaGpus.find({ _id: nvidiagpuid })
          .limit(1)
          .exec()
          .then((nvidiagpu) => {
            resolve(nvidiagpu);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    updateNvidiaGPUByID: (nvidiagpuid, nvidiagpu) => {
      return new Promise((resolve, reject) => {
        if (Object.keys(nvidiagpu).length > 0) {
          AmdGpus.findByIdAndUpdate(
            { _id: nvidiagpuid },
            { $set: nvidiagpu },
            { multi: false }
          )
            .exec()
            .then((data) => {
              resolve(nvidiagpuid);
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          resolve();
        }
      });
    },

    addNvidiaGPU: (nvidiagpu) => {
      return new Promise((resolve, reject) => {
        let newData = new NvidiaGpus(nvidiagpu);
        newData.save((err, addedData) => {
          if (err) {
            reject(err);
          } else resolve(addedData._id);
        });
      });
    },

    //
    //Nvme SSDs data fetch
    getAllNvmeSsds: () => {
      return new Promise((resolve, reject) => {
        NvmeSsds.find()
          .exec()
          .then((nvmessd) => {
            resolve(nvmessd);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getNvmeSsdById: (nvmessdid) => {
      return new Promise((resolve, reject) => {
        NvmeSsds.find({ _id: nvmessdid })
          .limit(1)
          .exec()
          .then((nvmessd) => {
            resolve(nvmessd);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    updateNvmeSsdByID: (nvmessdid, nvmessd) => {
      return new Promise((resolve, reject) => {
        if (Object.keys(nvmessd).length > 0) {
          AmdGpus.findByIdAndUpdate(
            { _id: nvmessdid },
            { $set: nvmessd },
            { multi: false }
          )
            .exec()
            .then((data) => {
              resolve(nvmessdid);
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          resolve();
        }
      });
    },

    addNvmeSsd: (nvmessd) => {
      return new Promise((resolve, reject) => {
        let newData = new NvmeSsds(nvmessd);
        newData.save((err, addedData) => {
          if (err) {
            reject(err);
          } else resolve(addedData._id);
        });
      });
    },

    //
    //Power supplies data fetch
    getAllPsus: () => {
      return new Promise((resolve, reject) => {
        Psus.find()
          .exec()
          .then((psu) => {
            resolve(psu);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getPsuById: (psusid) => {
      return new Promise((resolve, reject) => {
        Psus.find({ _id: psusid })
          .limit(1)
          .exec()
          .then((psu) => {
            resolve(psu);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    updatePsuByID: (psusid, psu) => {
      return new Promise((resolve, reject) => {
        if (Object.keys(psu).length > 0) {
          AmdGpus.findByIdAndUpdate(
            { _id: psusid },
            { $set: psu },
            { multi: false }
          )
            .exec()
            .then((data) => {
              resolve(psusid);
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          resolve();
        }
      });
    },

    addPsu: (psu) => {
      return new Promise((resolve, reject) => {
        let newData = new Psus(psu);
        newData.save((err, addedData) => {
          if (err) {
            reject(err);
          } else resolve(addedData._id);
        });
      });
    },

    //
    //Sata SSDs data fetch
    getAllSataSsds: () => {
      return new Promise((resolve, reject) => {
        SataSsds.find()
          .exec()
          .then((satassd) => {
            resolve(satassd);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getSataSsdById: (satassdid) => {
      return new Promise((resolve, reject) => {
        SataSsds.find({ _id: satassdid })
          .limit(1)
          .exec()
          .then((satassd) => {
            resolve(satassd);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    updateSataSsdByID: (satassdid, satassd) => {
      return new Promise((resolve, reject) => {
        if (Object.keys(satassd).length > 0) {
          AmdGpus.findByIdAndUpdate(
            { _id: satassdid },
            { $set: satassd },
            { multi: false }
          )
            .exec()
            .then((data) => {
              resolve(satassdid);
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          resolve();
        }
      });
    },

    addSataSsd: (satassd) => {
      return new Promise((resolve, reject) => {
        let newData = new SataSsds(satassd);
        newData.save((err, addedData) => {
          if (err) {
            reject(err);
          } else resolve(addedData._id);
        });
      });
    },

    //
    //Water coolings data fetch
    getAllWaterCoolings: () => {
      return new Promise((resolve, reject) => {
        WaterCoolings.find()
          .exec()
          .then((watercooling) => {
            resolve(watercooling);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getWaterCoolingById: (watercoolingid) => {
      return new Promise((resolve, reject) => {
        WaterCoolings.find({ _id: watercoolingid })
          .limit(1)
          .exec()
          .then((watercooling) => {
            resolve(watercooling);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    updateWaterCoolingByID: (watercoolingid, watercooling) => {
      return new Promise((resolve, reject) => {
        if (Object.keys(watercooling).length > 0) {
          AmdGpus.findByIdAndUpdate(
            { _id: watercoolingid },
            { $set: watercooling },
            { multi: false }
          )
            .exec()
            .then((data) => {
              resolve(watercoolingid);
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          resolve();
        }
      });
    },

    addWaterCooling: (watercooling) => {
      return new Promise((resolve, reject) => {
        let newData = new WaterCoolings(watercooling);
        newData.save((err, addedData) => {
          if (err) {
            reject(err);
          } else resolve(addedData._id);
        });
      });
    },
  };
};
