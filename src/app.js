'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const consign = require('consign');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

consign({ cwd: 'src' })
  .include('services')
  .then('controllers')
  .then('routes')
  .into(app)
  ;

module.exports = app;