const { Router } = require('express');
const { getCountriesHandler } = require("../Handlers/CountriesHandlers");
const { getIdHandler } = require('../Handlers/CountriesHandlers');

const routesCountries = Router();

routesCountries.get('/', getCountriesHandler);
routesCountries.get('/:id', getIdHandler);


module.exports = routesCountries 
