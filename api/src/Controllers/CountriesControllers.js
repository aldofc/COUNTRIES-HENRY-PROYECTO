const axios = require('axios')
const { Activity, Country } = require('../db')
const { Op } = require('sequelize'); // op se incluyen en forma de objeto

const countriesApi = async () => {
    let dbCountries = await Country.findAll({
        include: [Activity]
    })
    try {
        if (dbCountries.length === 0) {
            const { data } = await axios.get('https://restcountries.com/v3/all');


            const countries = data.map((country) => {
                return {
                    id: country.cca3,
                    name: country.name.common,
                    image: country.flags[0],
                    continent: country.continents[0],
                    capital: country.capital ? e.capital[0] : 'el pais no tiene capital',
                    subregion: country.subregion,
                    area: country.area,
                    population: country.population,
                };
            })

            console.log(countries)

            countries.forEach((country) => {  // forEach nos permite recorrer estructuras con varios elementos
                Country.findOrCreate({
                    where: { id: country.id },
                    defaults: {
                        id: country.cca3,
                        name: country.name.common,
                        image: country.flags,
                        continent: country.continents,
                        capital: country.capital,
                        subregion: country.subregion,
                        area: country.area,
                        population: country.population,
                    }
                })
            });
            dbCountries = await Country.findAll({
                include: [Activity]
            })

        }
        return dbCountries
    } catch (error) {
        console.log('error controller countriesApi ' + error)
    }
}

const getCountryByName = async (name) => {
    try {
        const byNameCountries = await Country.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            },
            include: [Activity]
        })
        return byNameCountries
    } catch (error) {
        console.log('error controller por nombre ' + error)
    }
}



module.exports = {
    getCountryByName,
    countriesApi
}