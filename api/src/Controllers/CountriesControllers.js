const axios = require ('axios')

const { Activity , Country} = require('../db')

const createActivityDB = async (id,name,image,continent,capital,subregion,area,population) => {
    return await Country.create({id,name,image,continent,capital,subregion,area,population});
}

// const getCountryById = async (id,sourse) => {
//     const country = 
//     sourse  === "api"
//       ? ( await axios.get(`https://restcountries.com/v3/all${id}`))
//       .data
//       : await Country.findByPk(id , {
//         include: {
//             model : Activity,
//             attributes: ["name"]
//         },
//       })
//       return country
// };


const infoCleaner = (array) => {
    return array.map((e) => {
        return {
            id:e.cca3,
            name: e.name.common,
            image: e.flags[0],
            continent: e.continents[0],
            capital: e.capital ? e.capital[0] : 'el pais no tiene capital',
            subregion: e.subregion,
            area: e.area,
            population: e.population,
            
        }
    })
};



const getAllCountries = async (name) => {
    const countryDB = await Country.findAll()

    const infoApi = (
        await axios.get("https://restcountries.com/v3/all")
    ).data;

    const countryApi = infoCleaner(infoApi);

    return [...countryDB, ...countryApi];
};


const getCountryByName = async (name) => {
    const infoApi = (
        await axios.get("https://restcountries.com/v3/all")
    ).data;

    const countryApi = infoCleaner(infoApi);

    const countryFiltered = countryApi.filter((country) => country.name === name);

    const countryDB = await Country.findAll({where: {name: name}});

    return [...countryFiltered , ...countryDB];
}


module.exports = {
    
    createActivityDB,
    getCountryByName,
    getAllCountries
}