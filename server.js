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
