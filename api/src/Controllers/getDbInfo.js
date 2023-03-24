require('dotenv').config;
const { Activity , Country } =require('../db');

const getDbInfo = async () => {
    try{
        const countries = await Country.findAll({
            include: {
                model: Activity,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })
        return await countries.map(e=>{
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
    }catch(error){
        return res.status(404).send(error)
    }
}


module.exports = {
   getDbInfo
}