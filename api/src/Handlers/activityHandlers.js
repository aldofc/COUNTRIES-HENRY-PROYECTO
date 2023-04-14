const { createDB , activitiesGet } = require('../Controllers/postController');

const getActivities = async (req, res) => {
    const { name, difficulty, duration, season, countries} = req.body;
    try {
        let newActivity = await activitiesGet(name, difficulty, duration, season, countries)
        res.status(200).send(newActivity)
    } catch (error) {
        console.log('Error en el get activities handler ' + error)
    }
}

const createActivity = async(req, res) => {
    const { name, difficulty, duration, season, countries} = req.body;
    try {
        let newActivity = await createDB(name, difficulty, duration, season, countries)
        res.status(200).send(newActivity)
    } catch (error) {
        console.log('Error en createActivity handler ' + error)
    }
}



module.exports = {
    getActivities,
    createActivity
}



