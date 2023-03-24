const { Router } = require('express');
const   getCountriesHandler  = require('../Handlers/CountriesHandler');
const getIdCountryHandle  = require('../Handlers/CountryIdHandler');

const routesCountries = Router();

routesCountries.get('/' , getCountriesHandler);
routesCountries.get('/:id' , getIdCountryHandle);


module.exports =   routesCountries 
