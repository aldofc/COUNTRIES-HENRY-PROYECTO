const { getAll } = require('../Controllers/getAllInfo')
const { getByName } = require('../Controllers/getApiInfo')

const getCountriesHandler = async (req,res) => {

 const {name} = req.query;

   try{
    if (name) {
        const countryByName = await getByName(name);
        res.status(200).json(countryByName);
       
    }else{
        const response = await getAll();
        res.status(200).json(response)
    }
   }catch(error){
    res.status(400).json({error: error.message});
   }
};








//-------------------------------------------













module.exports = 
    getCountriesHandler
   


