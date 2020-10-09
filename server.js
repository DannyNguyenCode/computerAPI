require('dotenv').config();
const mongoDBConnectionString = process.env.MONGODB_CONNECTION_STRING;
const HTTP_PORT = process.env.PORT || 8080;

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const dataService = require('./data-service.js');

const data = dataService(mongoDBConnectionString);

const app = express();
app.use(morgan('combined'));

app.use(bodyParser.json());
app.use(cors());
//
//AMD Graphic Card routes
app.get('/amdgpus', (req, res) => {
  data
    .getAllAMDGPUs()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting AMD GPUs');
      res.status(500).end();
    });
});
app.get('/amdgpu/:gpuid', (req, res) => {
  data
    .getAMDGPUsById(req.params.gpuid)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting AMD GPUs by ID');
      res.status(500).end();
    });
});

//
//AMD motherboard routes
app.get('/amdmobos', (req, res) => {
  data
    .getAllAMDmobos()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting AMD motherboards');
      res.status(500).end();
    });
});

app.get('/amdmobos/:moboid', (req, res) => {
  data
    .getAMDmobosById(req.params.moboid)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting AMD mobo by id');
      res.status(500).end();
    });
});

//
//AMD processor routes
app.get('/amdprocessors', (req, res) => {
  data
    .getAllAMDProcessors()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting AMD GPUs');
      res.status(500).end();
    });
});

app.get('/amdprocessors/:procid', (req, res) => {
  data
    .getAMDProcessorsById(req.params.procid)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting AMD processors by id');
      res.status(500).end();
    });
});

//
//Case fan routes
app.get('/casefans', (req, res) => {
  data
    .getAllCaseFans()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting case fans');
      res.status(500).end();
    });
});
app.get('/casefans/:casefanid', (req, res) => {
  data
    .getCaseFanById(req.params.casefanid)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting case fan by id');
      res.status(500).end();
    });
});
//
//Cases route
app.get('/cases', (req, res) => {
  data
    .getAllCases()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting cases');
      res.status(500).end();
    });
});
app.get('/cases/:caseid', (req, res) => {
  data
    .getCaseById(req.params.caseid)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting case by id');
      res.status(500).end();
    });
});
//
//Central processing unit fans and heat sinks route
app.get('/cpufansheatsinks', (req, res) => {
  data
    .getAllCpuFansHeatSinks()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting cpu fans and heatsinks');
      res.status(500).end();
    });
});
app.get('/cpufansheatsinks/:cpufansheatsinkid', (req, res) => {
  data
    .getCpuFansHeatSinksById(req.params.cpufansheatsinkid)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting cpu fan and heatsink by id');
      res.status(500).end();
    });
});
//
//start here for data-service file
//DDR4 ram route
app.get('/ddr4rams', (req, res) => {
  data
    .getAllddr4Rams()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting ddr4 rams');
      res.status(500).end();
    });
});
app.get('/ddr4rams/:ddr4ramid', (req, res) => {
  data
    .getddr4RamById(req.params.ddr4ramid)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting ddr4 rams by id');
      res.status(500).end();
    });
});
//
//Hard disk drive route
app.get('/harddiskdrives', (req, res) => {
  data
    .getAllHdds()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting hdds');
      res.status(500).end();
    });
});
app.get('/harddiskdrives/:hddid', (req, res) => {
  data
    .getHddById(req.params.hddid)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting hdd by id');
      res.status(500).end();
    });
});
//
//Intel motherboard route
app.get('/intelmobos', (req, res) => {
  data
    .getAllIntelMobos()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting Intel motherboards');
      res.status(500).end();
    });
});
app.get('/intelmobos/:intelmoboid', (req, res) => {
  data
    .getIntelMoboById(req.params.intelmoboid)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting Intel motherboard by id');
      res.status(500).end();
    });
});
//Intel processors route
//
app.get('/intelprocessors', (req, res) => {
  data
    .getAllIntelProcessors()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting Intel processors');
      res.status(500).end();
    });
});
app.get('/intelprocessors/:intelprocessorid', (req, res) => {
  data
    .getIntelProcessorById(req.params.intelprocessorid)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting Intel processors by id');
      res.status(500).end();
    });
});

//
//Nvidia Graphic card route
app.get('/nvidiagpus', (req, res) => {
  data
    .getAllNvidiaGPUs()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting Nvidia graphic cards');
      res.status(500).end();
    });
});
app.get('/nvidiagpus/:nvidiagpuid', (req, res) => {
  data
    .getNvidiaGPUById(req.params.nvidiagpuid)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting Nvidia graphic card by id');
      res.status(500).end();
    });
});
//
//Nvme solid state drive route
app.get('/nvmessds', (req, res) => {
  data
    .getAllNvmeSsds()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting nvme solid state drives');
      res.status(500).end();
    });
});
app.get('/nvmessds/:nvmessdid', (req, res) => {
  data
    .getNvmeSsdById(req.params.nvmessdid)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within nvme solid state drive by id');
      res.status(500).end();
    });
});
//
//Power supply route
app.get('/psus', (req, res) => {
  data
    .getAllPsus()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting power supplies');
      res.status(500).end();
    });
});
app.get('/psus/:psuid', (req, res) => {
  data
    .getPsuById(req.params.psuid)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting power supply by id');
      res.status(500).end();
    });
});
//
//Sata solid state drive route
app.get('/satassds', (req, res) => {
  data
    .getAllSataSsds()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting sata solid state drives');
      res.status(500).end();
    });
});
app.get('/satassds/:satassdid', (req, res) => {
  data
    .getSataSsdById(req.params.satassdid)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting sata solid state drive by id');
      res.status(500).end();
    });
});

//
//Water Cooling route
app.get('/watercoolings', (req, res) => {
  data
    .getAllWaterCoolings()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting water coolings');
      res.status(500).end();
    });
});
app.get('/watercoolings/:watercoolingid', (req, res) => {
  data
    .getWaterCoolingById(req.params.watercoolingid)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message + ' within getting water cooling by id');
      res.status(500).end();
    });
});
//
//Catch all route
app.use((req, res) => {
  res.status(404).end();
});

data
  .connect()
  .then(() => {
    app.listen(HTTP_PORT, () => {
      console.log('Listening to port: ' + HTTP_PORT);
      console.log('http://localhost:' + HTTP_PORT + '/');
    });
  })
  .catch((err) => {
    console.log('unable to start the server: ', err.message);
    process.exit();
  });
