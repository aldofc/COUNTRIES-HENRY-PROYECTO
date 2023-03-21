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
                id:e.id,
                name: e.name,
                image: e.image,
                continent: e.continents,
                capital: e.capital,
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