const { Activity, Country } = require('../db');


const createDB = async (name, difficulty, duration, season, countries) => {

    try {
        let newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        });

        let selectCountries = await Country.findAll({
            where: {
                name: countries
            }
        });

        return newActivity.addCountry(selectCountries)
    } catch (error) {
        console.log('Error postActivity en controller ' + error)
    }
};





const activitiesGet = async () => {
    try {
        let byActivities = await Activity.findAll({
        });
        return byActivities
    } catch (error) {
        console.log('Error en get activities en la funcion ' + error)
    }
};

module.exports = {
    createDB,
    activitiesGet
}