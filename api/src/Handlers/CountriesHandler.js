const { getAll } = require('../Controllers/getAllInfo')



const getCountriesHandler = async (req,res) => {

    const { name } = req.query;
    let allInfo = await getAll();

    if (name) {
        try {
            let filteredCountry = await allInfo.filter((e) => 
            e.name.toLowerCase().includes(name.toLowerCase())
            );
            filteredCountry.length
            ? res.status(200).send(filteredCountry)
            : res.status(404).send('no se encontro el pais')
        } catch (error){
           return res.status(400).send('equivocado')
        }
    }else{
        res.send(allInfo);
    }   

    

    
};
module.exports=getCountriesHandler 

