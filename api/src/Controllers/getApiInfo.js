require('dotenv').config();
const axios =require('axios')

const getApiInfo = async () => {
    try{
        const apiUrl = await axios({
            url : "https://restcountries.com/v3/all",
        })

        const apiInfo = await apiUrl.data.results?.map((e) => {
            return{
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
        return apiInfo;
    }catch(error){
        return error
    }
}


module.exports = {
    getApiInfo
}