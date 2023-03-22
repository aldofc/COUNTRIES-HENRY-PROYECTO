require('dotenv').config();
const axios =require('axios')

const getApiInfo = async () => {
    try{
        const apiUrl = await axios({
            url : "https://restcountries.com/v3/all",
        })

        const apiInfo = await apiUrl.data.map((e) => {
            return{
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
        //console.log(apiInfo)
        return apiInfo;
       
    }catch(error){
        return error
    }
}


module.exports = {
    getApiInfo
}