const { Router } = require('express');



const { getContinent }= require('../Controllers/FilterController')

const routerFilter = Router();


routerFilter.get('/continent/:continent', async (req, res) => {
    const continent = req.params.continent;
    try {
        let byContinent = await getContinent(continent)
        res.status(200).send(byContinent)
    } catch (error) {
        console.log('Error en continent en el llamado ' + error)
    }
});

module.exports = {
    routerFilter
};