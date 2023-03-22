const { getAll } = require('../Controllers/getAllInfo')

const getIdCountryHandler = async (req,res) => {

    try{
        const {id} = req.params;
        const totalCountries = await getAll()

        if(id) {
            let countryId = await totalCountries.filter((r) => r.id == id)
            res.status(200).json(countryId)
        }
    }catch(error){
        res.status(404).send(error)
    }

   
};

module.exports=getIdCountryHandler;