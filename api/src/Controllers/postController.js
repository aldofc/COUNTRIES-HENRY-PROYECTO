const { Activity, Country } = require('../db');

const createDB = async (name, difficulty, duration, season, countries) => {

    const activity = await Activity.create({
        name,
        difficulty,
        duration,
        season

    });

    let concatCountry = await Country.findAll({
        where: { name: countries }
    });

    activity.addCountry(concatCountry);
    return activity

}

module.exports = { createDB }