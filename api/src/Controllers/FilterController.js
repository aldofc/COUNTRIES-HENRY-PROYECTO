const { Activity , Country} = require('../db')

const getContinent = async (continent) => {
    try {
        let byContinent = await Country.findAll({
            where: {
                continents: continent
            },
            include: [Activity]
        });
        return byContinent
    } catch (error) {
        console.log('Error en get continent en la funcion ' + error)
    }
};


module.exports={
    getContinent
}
