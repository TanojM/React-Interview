require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const axios = require('axios');
const path = require('path');
const cors = require('cors');
const port = 8000;
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build'))); //build

// iframe portal api
app.get('/api/iframe-portal', (req, res) => {
  var config = {
    method: 'get',
    url: 'https://portal.coxedge.com/rest/views/services/edge-db/workspace/environment/3b2e36ce-aee9-4ad0-952a-c57d6fb1797f/iframe?windowId=z2jviy4v&v=v2',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      cookie:
        'JSESSIONID=15d91d8b-0d23-47e8-81f8-ee87c6bf307d; CSRF-TOKEN=0m2VkZP3LkM_fDrLyHqyApUZeiwVbZ3H2m9CWmolDT336JFN',
    },
  };

  axios(config)
    .then((resp) => {
      console.log(resp.data, 'iframe res');
      return res.send(resp.data);
    })
    .catch((err) => {
      console.log(err.response.data, 'iframe err');
      res.status(500).json({
        error: 500,
        msg: err.response.data,
      });
    });
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  run();
});
app.listen(port);
