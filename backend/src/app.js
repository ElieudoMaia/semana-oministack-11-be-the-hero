const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');

const app = express();

app.use(cors()); // pode passar como paramentros as origins
// Trata o corpo das requisições como JSON (Espera receber json)
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;