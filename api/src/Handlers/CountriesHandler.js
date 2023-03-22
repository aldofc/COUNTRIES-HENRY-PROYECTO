const { getAll } = require('../Controllers/getAllInfo')

const getCountriesHandler = async (req,res) => {
    try{
        const {name} = req.query; 
        let allInfo = await getAll(name)
        res.json(allInfo)
    }catch(error){
        res.status(404).send(error)
    }
};



// const getCountriesByName = async (name) => {

//     const countryApi = 

  
// }
module.exports=getCountriesHandler 

