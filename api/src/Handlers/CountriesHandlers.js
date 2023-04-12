const {
  getCountryByName,
  countriesApi
} = require("../Controllers/CountriesControllers");

const getCountriesHandler = async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const countryByName = await getCountryByName(name);
      res.status(200).json(countryByName);
    } else {
      const response = await countriesApi();
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getIdHandler = async (req, res) => {

  try {
    const { id } = req.params;
    const totalCountries = await countriesApi()

    if (id) {
      let countryId = await totalCountries.filter((r) => r.id == id)
      res.status(200).json(countryId)
    }
  } catch (error) {
    res.status(404).send(error)
  }
}


module.exports = {
  getCountriesHandler,
  getIdHandler
} 
