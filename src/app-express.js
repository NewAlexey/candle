/* eslint-disable */
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = process.evn?.PORT || 3000;

const appExpress = express();
appExpress.use(bodyParser.json());
appExpress.use(cors());
appExpress.use(
  express.static(path.join(__dirname, 'public')),
);

appExpress.listen(PORT, () =>
  console.log(`Server started on ${PORT}`),
);
